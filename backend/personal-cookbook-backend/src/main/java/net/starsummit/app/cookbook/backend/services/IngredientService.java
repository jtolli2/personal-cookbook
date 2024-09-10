package net.starsummit.app.cookbook.backend.services;

import net.starsummit.app.cookbook.backend.entities.Ingredient;

public interface IngredientService {
    public Ingredient create(Ingredient ingredient);

    public Ingredient findById(Long id);

    public Ingredient[] findAll();

    public Ingredient update(Ingredient ingredient);

    public void delete(Ingredient ingredient);
}
