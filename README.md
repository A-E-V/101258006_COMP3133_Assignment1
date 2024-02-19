# 101258006_COMP3133_Assignment1
## Author
- 101258006 - Adrian Vargas

## How to run project
1. Clone the repo
2. Run `npm install` to install all of the dependencies
3. Run `npm start` to start up the server
4. Open `http://localhost:3000/graphql` to have access to the GraphQL Playground
5. Run all of the queries and mutations

### Sample Login
```json
query Login {
  login(usernameOrEmail: "username", password: "Password") {
    user {
      id
      username
      email
      password
    }
  }
}

```

