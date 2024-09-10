package net.starsummit.app.cookbook.backend.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import net.starsummit.app.cookbook.backend.entities.Recipe;

import java.util.List;

public interface RecipeService {

    Recipe create(Recipe recipe);

    Recipe findById(Integer id);

    List<Recipe> findAll();

    Recipe update(Integer id, Recipe recipe);

    void delete(Integer id);

    Recipe importRecipe(String url) throws JsonProcessingException;

    Recipe importSave(String url) throws JsonProcessingException;

}
