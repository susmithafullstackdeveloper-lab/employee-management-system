# Employee Management System

Full Stack Employee Management System built using Angular, Spring Boot, Spring Data JPA, PostgreSQL and REST APIs.

## Features
- Employee CRUD operations
- Search employees by name
- Pagination and sorting
- Input validation
- Global exception handling
- RESTful API architecture
- Angular responsive UI

## Tech Stack
Frontend:
- Angular
- TypeScript
- HTML
- CSS
- Bootstrap

Backend:
- Java 17
- Spring Boot
- Spring Data JPA
- Hibernate
- Maven

Database:
- PostgreSQL

## Backend APIs
| Method | API | Description |
|---|---|---|
| GET | /api/employees | Get all employees |
| GET | /api/employees/{id} | Get employee by id |
| POST | /api/employees | Create employee |
| PUT | /api/employees/{id} | Update employee |
| DELETE | /api/employees/{id} | Delete employee |
| GET | /api/employees/search?name=abc | Search employee |

## Run Backend
Create PostgreSQL database:

```sql
CREATE DATABASE employee_db;
```

Update password in:

```text
backend/src/main/resources/application.properties
```

Run:

```bash
cd backend
mvn spring-boot:run
```

## Run Frontend
```bash
cd frontend
npm install
ng serve
```
