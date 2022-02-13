/// <reference types="cypress" />

require('dotenv').config()
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  config.env.BASE_URL_API = process.env.BASE_URL_API
  config.env.PASSWORD = process.env.PASSWORD
  return config
}
