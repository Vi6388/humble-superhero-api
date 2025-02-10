# Humble Superhero API

This is a simple Node.js API that allows users to manage a list of superheroes, including their names, superpowers, and humility scores.

## Endpoints

- **POST /superheroes**
  - Adds a new superhero.
  - Request body: `{ "name": "string", "superpower": "string", "humilityScore": number }`

- **GET /superheroes**
  - Fetches the list of superheroes sorted by humility score in descending order.

## Running the API

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the server with `npm start`.

## Testing

Run the tests with `npm test`.

## Collaboration

To improve or expand this API, I would collaborate with a teammate by discussing potential features like:
- Persisting data in a database instead of in-memory storage.
- Adding user authentication.
- Creating a frontend interface for better user experience.

## If I Had More Time

If I had more time, I would explore:
- Implementing a frontend using React.
- Adding more comprehensive validation and error handling.
- Writing more tests for edge cases.