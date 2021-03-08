const api = () => {
  if (process.env.MAOO_ENVIRONMENT === 'development') {
    return {
      hasura: 'http://graphql-engine:8080'
    }
  } else {
    return {
      hasura: ''
    }
  }
}

export default api()
