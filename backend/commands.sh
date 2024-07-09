## Create a new project
nest new personal-cookbook-backend

cd personal-cookbook-backend
touch .env

## Install dependencies
# Install typeorm and db drivers
bun i @nestjs/typeorm typeorm pg
bun i -D better-sqlite3

# Install config module
bun i @nestjs/config

# Generate entities
nest g resource recipe

nest g resource step

nest g resource ingredient
# touch src/ingredient/entities/recipe_ingredient.entity.ts
# touch src/ingredient/entities/step_ingredient.entity.ts

# Create db config files
mkdir src/config
touch src/config/orm.config.ts
touch src/config/orm.config.prod.ts

# Install nodemailer
bun i @nestjs-modules/mailer nodemailer
bun i -D @types/nodemailer

# Install passport with local strategy and jwt strategy
bun i  @nestjs/passport passport passport-local
bun i -D @types/passport-local

bun i @nestjs/jwt passport-jwt
bun i -D @types/passport-jwt

# Install bcrypt
bun i bcrypt
bun i -D @types/bcrypt

# Generate auth module and entities
nest g module auth
nest g service auth
nest g controller auth

mkdir src/auth/entities
touch src/auth/entities/user.entity.ts
touch src/auth/entities/role.entity.ts
touch src/auth/entities/token.entity.ts