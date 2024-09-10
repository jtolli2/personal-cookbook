package net.starsummit.app.cookbook.backend.enums;

public enum Unit {
    GRAM("g"),
    MILLILITER("ml"),
    TEASPOON("tsp"),
    TABLESPOON("tbsp"),
    KILOGRAM("kg"),
    POUND("lb"),
    OUNCE("oz"),
    PINT("pt"),
    QUART("qt"),
    FLUID_OUNCE("fl oz"),
    CUP("cup"),
    PINCH("pinch"),
    DASH("dash"),
    EACH("each"),
    COUNT("count"),
    SLICE("slice"),
    CLOVE("clove"),
    HEAD("head"),
    UNIT("unit");

    private final String value;

    Unit(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return value;
    }
}
