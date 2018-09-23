let production = {
  NODE_ENV: 'production',
  DEBUG_MODE: false,
  APP_NAME: 'Мой технопарк',
  APP_ID: 'bootstrap',
  API_URL: 'http://192.168.78.173:3333/api/v1/'
}

let development = Object.assign({}, production, {
  NODE_ENV: 'development',
  API_URL: 'http://127.0.0.1:3333/api/v1/',
  // API_URL: 'http://192.168.78.173:3333/api/v1/',
  DEBUG_MODE: true
})

let config = {
  development,
  production
}

let env = process.env.NODE_ENV || 'development'
export default config[env]
