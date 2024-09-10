package net.starsummit.app.cookbook.backend.data;

import net.starsummit.app.cookbook.backend.entities.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {
}