# Soft Jobs

Back-end app built with node and express.js implementing a simple json web token based user authentication system. It features register, login functionality and a user info resource that requires a valid jwt to access.

## Usage

Requires .env file in root folder with the following variables

```[dotenv]
PGUSER=postgres
PGPASSWORD=postgres
PGHOST=localhost
PGDATABASE=softjobs
PGPORT=5432
JWT_SECRET=<your secret>
```
