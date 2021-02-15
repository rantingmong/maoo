# maoo
A social platform for cats

This is the master repository for maoo (web frontend and backend).

### Overview

#### Frontend
The frontend is made using Svelte 3 written in TypeScript. I have plans on converting the project to Sapper but while that is not yet stable the project will be a vanilla Svelte codebase.

#### Backend
The backend is written also in TypeScript and deployed to Firebase (Google) Cloud Functions. Firebase Auth is also used but the main database of the backend will be stored on a PostgreSQL database interfaced by a GraphQL API by Hasura.

### Running locally on your dev machine
This creates a PostgreSQL server, the Hasura GraphQL engine, and the Firebase Emulator:

```shell
docker-compose up -d
```

Take note that this will be building the image for the firebase emulator container. IP addresses might need changing too in the compose file and the cloud function file (I'm still new with Docker so its hardcoded for now).

Once the backend stuff are running, just do a `npm run dev` on the root directory to start the frontend dev server.
