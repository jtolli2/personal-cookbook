from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from pydantic import BaseModel
from recipe_scrapers import scrape_me
from typing import List

class RecipeRequest(BaseModel):
    url: str

class Ingredient(BaseModel):
    text: str

class Step(BaseModel):
    order: int
    body: str

class Recipe(BaseModel):
    name: str
    description: str
    image: str
    steps: List[Step]
    ingredients: List[Ingredient]

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    return JSONResponse(status_code=400, content=exc.errors())

@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(status_code=exc.status_code, content=exc.detail)

@app.get("/")
async def root():
    return {"message": "Hello World"}

""" @app.get("/recipes/{url}")
async def scrape(url: str):
    print("Scraping: " + url)
    scraper = scrape_me(url)
    return scraper.to_json() """

@app.post("/recipes/")
async def scrape(recipe_request: RecipeRequest):
    print("Scraping: " + recipe_request.url)
    scraper = scrape_me(recipe_request.url)

    resultIngredients = [Ingredient(text=ingredient) for ingredient in scraper.ingredients()]

    resultSteps = [Step(order=order + 1, body=step) for (order, step) in enumerate(scraper.instructions_list())]

    result = Recipe(
        name=scraper.title(),
        description=scraper.description(),
        image=scraper.image(),
        steps=resultSteps,
        ingredients=resultIngredients,
    )

    # return scraper.to_json()
    return result