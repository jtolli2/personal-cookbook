package net.starsummit.app.cookbook.backend.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import net.starsummit.app.cookbook.backend.enums.Unit;

@Entity
@Table(name = "ingredient")
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "text")
    private String text;

    @Column(name = "name", nullable = true)
    private String name;

    @Column(name = "note", nullable = true)
    private String note;

    @Column(name = "quantity", nullable = true)
    private Integer quantity;

    @Enumerated(EnumType.STRING)
    @Column(name = "unit", nullable = true)
    private Unit unit;

    @JsonBackReference
    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Unit getUnit() {
        return unit;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }
}