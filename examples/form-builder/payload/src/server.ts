import path from 'path'
import express from 'express'
import payload from 'payload'
import { seed } from './seed'

// eslint-disable-next-line
require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
})

const app = express()

app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    email: {
      fromName: 'Admin',
      fromAddress: 'admin@example.com',
      logMockCredentials: true,
    },
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  if (process.env.PAYLOAD_SEED === 'true') {
    payload.logger.info('---- SEEDING DATABASE ----')
    await seed(payload)
  }

  app.listen(3000)
}

start()
