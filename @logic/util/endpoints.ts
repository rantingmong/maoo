const api = () => {
  switch (process.env.VERCEL_ENV) {
    case 'development':
      return {
        hasura: 'http://graphql-engine:8080'
      }
    case 'preview':
      return {
        hasura: process.env.MAOO_SCHEMA_ENDPOINT
      }
    case 'production':
      return {
        hasura: ''
      }
  }
}

export default api()
