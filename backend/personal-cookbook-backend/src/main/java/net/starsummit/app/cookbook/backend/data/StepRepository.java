package net.starsummit.app.cookbook.backend.data;

import net.starsummit.app.cookbook.backend.entities.Step;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StepRepository extends JpaRepository<Step, Integer> {
}