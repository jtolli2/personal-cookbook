package net.starsummit.app.cookbook.backend.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import net.starsummit.app.cookbook.backend.entities.Recipe;
import net.starsummit.app.cookbook.backend.services.RecipeServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    private static final Logger logger = Logger.getLogger(RecipeController.class.getName());

    private final RecipeServiceImpl recipeService;

    public RecipeController(RecipeServiceImpl recipeService) {
        this.recipeService = recipeService;
    }

    @PostMapping
    public Recipe create(@RequestBody Recipe recipe) {
        return recipeService.create(recipe);
    }

    @GetMapping("/{id}")
    public Recipe findById(@PathVariable Integer id) {
        logger.info("Finding recipe by id: " + id);
        return recipeService.findById(id);
    }

    @GetMapping
    public Iterable<Recipe> findAll() {
        return recipeService.findAll();
    }

    @PatchMapping("/{id}")
    public Recipe update(@PathVariable Integer id, @RequestBody Recipe recipe) {
        return recipeService.update(id, recipe);
    }

    @DeleteMapping("/{id}")
    public void delete(Integer id) {
        recipeService.delete(id);
    }

    @PostMapping("/import")
    public Recipe importRecipe(@RequestBody String url) throws JsonProcessingException {
        logger.info("Importing recipe: " + url);
        return recipeService.importRecipe(url);
    }

    @PostMapping("/import-save")
    public Recipe importSave(@RequestBody String url) throws JsonProcessingException {
        return recipeService.importSave(url);
    }

    @GetMapping("/export")
    public Iterable<Recipe> exportRecipe() {
        return recipeService.findAll();
    }
}
