# maoo
A social platform for cats

This is the master repository for maoo (web frontend and backend).

### Overview

#### Frontend
The frontend is made using React+Next.js and written in TypeScript.

#### Backend
The backend is written also in TypeScript and deployed to Vercel. Firebase Auth is also used and main database of the backend will be stored on a PostgreSQL database interfaced by a GraphQL API by Hasura.

### Running locally on your dev machine
This creates a PostgreSQL server, the Hasura GraphQL engine, the Firebase Emulator for auth, and a vercel dev environment:

```shell
docker-compose up -d
```

If everything is complete just navigate to https://localhost:3000 (or whatever port `vercel dev` assigns)!
