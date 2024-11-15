
---

# HTTP Server with Node.js

This project is a basic Node.js server built with TypeScript, which handles different routes for serving HTML pages, creating a user, and handling errors. The server listens on port 3000 and serves pages like greetings, users, and handles a POST request for creating a user.

## Features

- Handles GET requests for:
  - `/`: Serves a greetings page.
  - `/users`: Serves a list of users.
  
- Handles POST requests for:
  - `/create-user`: Creates a user by extracting data from the request and redirecting to the home page.
  
- Handles errors:
  - Displays a 404 error page for unrecognized routes.
  - Displays a "Method Not Allowed" error for unsupported HTTP methods.

## File Structure

```
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Exact dependency tree for reproducibility
├── README.md            # Project documentation
├── src
│   ├── controllers
│   │   └── requestController.ts  # Controller for handling HTTP requests
│   ├── helper.ts         # Helper functions (file reading, logging, method check)
│   ├── script.ts         # Main server setup file
│   └── views
│       ├── 404.html      # 404 error page
│       ├── badMethod.html  # Page for method not allowed error
│       ├── greetings.html  # Greetings page
│       └── users.html    # Users page
└── tsconfig.json         # TypeScript configuration
```

### Description of Files

- **`script.ts`**: This file sets up the HTTP server and listens on port 3000. It imports and uses the `requestHandler` function from `controllers/requestController.ts` to handle incoming requests.

- **`helper.ts`**: Contains utility functions such as `readFile` to read file contents synchronously, `logger` for logging messages to the console, and `sendMethodNotAllowed` to respond with a 405 error when an unsupported HTTP method is used.

- **`requestController.ts`**: Handles the routing logic based on the URL and HTTP method (GET or POST). It serves HTML pages or handles form data submissions (creating users).

- **`views/`**: Contains HTML files:
  - `greetings.html`: Displays a greetings message.
  - `users.html`: Displays a list of users.
  - `404.html`: A custom error page for not found routes.
  - `badMethod.html`: An error page displayed when a method is not allowed.

### How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/julius-amt/simpleUserCreationForm.git
   cd simpleUserCreationForm/
   ```

2. **Install Dependencies**:
   Install the required dependencies using npm or yarn:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Compile TypeScript**:
   The TypeScript files need to be compiled before running. You can do this using the `tsc` command, which will compile your `.ts` files into `.js`:
   ```bash
   npx tsc
   ```

4. **Start the Server**:
   Run the compiled JavaScript code to start the server:
   ```bash
   node dist/script.js
   ```
   Alternatively, you can run `ts-node` to run the TypeScript code directly:
   ```bash
   npx ts-node src/script.ts
   ```

5. **Visit the Server**:
   Open your browser and go to `http://localhost:3000` to interact with the server.

   - Go to `/` to see the greetings page.
   - Go to `/users` to see the users page.
   - Go to `/create-user` and submit a form with a `POST` request to create a user.

### Available Routes

- **`GET /`**: Displays the `greetings.html` page.
- **`GET /users`**: Displays the `users.html` page.
- **`POST /create-user`**: Accepts form data, extracts the username, logs it, and redirects to the home page.
- **Any other path**: Displays the `404.html` page for not found errors.
- **Any unsupported HTTP method**: Displays the `badMethod.html` page for method not allowed errors.

### Dependencies

- `http`: Core Node.js module to create the HTTP server.
- `path`: Core Node.js module to resolve file paths.
- `url`: Core Node.js module to handle URL query parameters.
- `fs`: Core Node.js module to read files from the filesystem.
- `ts-node`: A tool to run TypeScript files directly without compiling them first (optional for development).


### License

This project is open-source and available under the MIT License.
