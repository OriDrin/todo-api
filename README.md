# To-Do API

A simple REST API for managing a to-do list, built with Node.js and Express.
This is my first backend project.

## Tech stack

- **Node.js** – runs JavaScript on the server
- **Express** – web framework for routing and handling requests
- **Postman** – manual and automated API testing

## Endpoints

| Method | Path         | Description        | Success | Errors                 |
| ------ | ------------ | ------------------ | ------- | ---------------------- |
| GET    | `/todos`     | Get all todos      | 200     | –                      |
| POST   | `/todos`     | Create a new todo  | 201     | 400 if `title` missing |
| GET    | `/todos/:id` | Get one todo by id | 200     | 404 if not found       |
| PUT    | `/todos/:id` | Update a todo      | 200     | 404 if not found       |
| DELETE | `/todos/:id` | Delete a todo      | 204     | 404 if not found       |

### Example

Create a todo:

```http
POST /todos
Content-Type: application/json

{ "title": "Buy bread" }
```

Response (`201 Created`):

```json
{ "id": 4, "title": "Buy bread", "done": false }
```

## How to run

```bash
npm install
node index.js
```

The server runs on `http://localhost:3000`.

## Testing

The API is tested with a Postman collection: 8 requests and 15 automated tests,
covering both successful requests and error cases (400 and 404).
The tests clean up after themselves, so the collection can be run repeatedly.

## Notes

Data is stored in memory, so it resets every time the server restarts.
