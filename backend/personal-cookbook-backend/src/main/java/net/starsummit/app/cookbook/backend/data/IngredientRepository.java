package net.starsummit.app.cookbook.backend.data;

import net.starsummit.app.cookbook.backend.entities.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientRepository extends JpaRepository<Ingredient, Integer> {
}