package net.starsummit.app.cookbook.backend.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import net.starsummit.app.cookbook.backend.data.RecipeRepository;
import net.starsummit.app.cookbook.backend.entities.Recipe;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;

import java.util.List;

@Service
public class RecipeServiceImpl implements RecipeService {

    private final RecipeRepository recipeRepository;

    @Value("${scraper-api.host}")
    private String scraperApiHost;
    @Value("${scraper-api.port}")
    private String scraperApiPort;

    public RecipeServiceImpl(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @Override
    public Recipe create(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @Override
    public Recipe findById(Integer id) {
        Recipe recipe = recipeRepository.findById(id).orElse(null);

        if (recipe == null) {
            throw new RuntimeException("Recipe not found: " + id);
        }

        return recipe;
    }

    @Override
    public List<Recipe> findAll() {
        return recipeRepository.findAll();
    }

    @Override
    public Recipe update(Integer id, Recipe recipe) {
//        Recipe existingRecipe = findById(id);
        return recipeRepository.save(recipe);
    }

    @Override
    public void delete(Integer id) {
        Recipe recipe = findById(id);
        recipeRepository.delete(recipe);
    }

    @Override
    public Recipe importRecipe(String url) throws JsonProcessingException {
        HttpClient httpClient = HttpClient.create().followRedirect(true);

        WebClient webClient = WebClient.builder()
                .baseUrl(String.format("http://%s:%s", scraperApiHost, scraperApiPort))
                .defaultHeaders(headers -> headers.add("Accept", "application/json"))
                .defaultHeaders(headers -> headers.add("Content-Type", "application/json"))
                .clientConnector(new ReactorClientHttpConnector(httpClient))
                .build();

//        JsonNode root = new ObjectMapper().readTree(url);
//        url = root.get("url").asText();

        Recipe recipe = webClient.post()
                .uri("/recipes")
                .body(BodyInserters.fromValue(url))
                .retrieve()
                .bodyToMono(Recipe.class)
//                .bodyToMono(JsonNode.class)
//                .map(node -> new ObjectMapper().convertValue(node, Recipe.class))
//                .toBodilessEntity()
                .block();

        System.out.println(recipe.getName());

        if (recipe == null) {
            throw new RuntimeException("Recipe not found: " + url);
        }

        return recipe;
    }

    @Override
    public Recipe importSave(String url) throws JsonProcessingException {
        Recipe recipe = importRecipe(url);
        return recipeRepository.save(recipe);
    }
}
