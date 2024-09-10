FROM amazoncorretto:22.0.2-alpine AS build

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN ./mvnw clean package -DskipTests

FROM amazoncorretto:22.0.2-alpine
COPY --from=build /usr/src/app/target/backend-0.0.1-SNAPSHOT.jar /usr/app/backend.jar
EXPOSE 3000
ENTRYPOINT ["java","-jar","/usr/app/backend.jar"]
