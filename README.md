## Pet-clinic-assignment
* install the npm 
    ```
     npm install
    ```
* install the cypress
    ```
     npm install cypress --save-dev 
    ```
  ##### cypress folder structure will show on project after a refresh the project 

#### Now install the dependencies to compare the screenshot.
  ```
  npm i -D cypress-image-diff-js
  ```
#### test cases written in pet-clinic folder
1. cypress -> e2e -> pet-clinic

* How to run the cypress test cases from command line
```
mpx cypress run 
```

### please make sure that following steps should be executed before running the test cases on web page
1. git clone https://github.com/spring-projects/spring-petclinic.git
1. cd spring-petclinic
1. ./mvnw package
1. java -jar target/*.jar


