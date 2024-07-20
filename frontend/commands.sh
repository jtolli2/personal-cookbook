### ANGULAR BACKEND
## Create a new project
# ng new personal-cookbook-frontend
bun create analog@latest personal-cookbook-frontend

cd personal-cookbook-frontend

## Install dependencies
bun i

bun i @fortawesome/fontawesome-free

# Create env file
touch .env

# Create page folders
mkdir src/app/pages/auth
mkdir src/app/pages/home
mkdir src/app/pages/about
mkdir src/app/pages/recipes
mkdir src/app/pages/settings
mkdir src/app/pages/admin

# Create misc folders
mkdir src/app/components
mkdir src/app/models
mkdir src/app/services
mkdir src/app/utils
mkdir src/app/interceptors

# Create page layouts
touch src/app/pages/auth.page.ts
touch src/app/pages/home.page.ts
touch src/app/pages/about.page.ts
touch src/app/pages/recipes.page.ts
touch src/app/pages/settings.page.ts
touch src/app/pages/admin.page.ts
touch src/app/pages/[...not-found].page.ts

# Create model files
touch src/app/models/recipe.model.ts
touch src/app/models/step.model.ts
touch src/app/models/ingredient.model.ts
touch src/app/models/unit.enum.model.ts

# Create service files
touch src/app/services/recipe.service.ts
touch src/app/services/step.service.ts
touch src/app/services/ingredient.service.ts

# Create interceptor files