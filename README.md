# The automated greenhouse webapp
It consists of a React frontend and a Rust backend.
# Development
## Running the frontend
Execute the following in `./frontend`:
```bash
npm install
npm start
```
By default, this frontend will use the hosted development backend at `https://greenhouse-backend-dev.fly.io`.

### Configuring a local backend
You can also host your own local backend as described in [the next section](#running-the-backend).
Then create the file `.env.development.local` with these contents:
```
REACT_APP_BACKEND_HOST=http://localhost:8080
```

# Running the backend
If you just want to run a local backend server, use Docker to build a container:
```bash
docker build -t my-backend .
docker run my-backend
```
Alternatively you can directly run the Rust app with `cargo run`.