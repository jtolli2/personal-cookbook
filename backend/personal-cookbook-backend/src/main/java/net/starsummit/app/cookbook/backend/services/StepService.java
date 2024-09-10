package net.starsummit.app.cookbook.backend.services;

import net.starsummit.app.cookbook.backend.entities.Step;

public interface StepService {

    public Step create(Step step);

    public Step findById(Long id);

    public Step[] findAll();

    public Step update(Step step);

    public void delete(Step step);
}
