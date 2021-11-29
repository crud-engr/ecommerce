/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import Application from '@ioc:Adonis/Core/Application'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'
const Url = require('url-parse')
const CLEARDB_DATABASE_URL = new Url(Env.get('CLEARDB_DATABASE_URL'))

const databaseConfig: DatabaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */
  connection: Env.get('DB_CONNECTION'),

//   connections: {
//     host: Env.get('DB_HOST', CLEARDB_DATABASE_URL.host),
//     port: Env.get('DB_PORT', ''),
//     user: Env.get('DB_USER', CLEARDB_DATABASE_URL.username),
//     password: Env.get('DB_PASSWORD', CLEARDB_DATABASE_URL.password),
//     database: Env.get('DB_DATABASE', CLEARDB_DATABASE_URL.pathname.substr(1))
// }

  connections: {
    /*
    |--------------------------------------------------------------------------
    | SQLite
    |--------------------------------------------------------------------------
    |
    | Configuration for the SQLite database.  Make sure to install the driver
    | from npm when using this connection
    |
    | npm i sqlite3
    |
    */
    sqlite: {
      client: 'sqlite',
      connection: {
        filename: Application.tmpPath('db.sqlite3'),
      },
      migrations: {
        naturalSort: true,
      },
      useNullAsDefault: true,
      healthCheck: false,
      debug: false,
    },

  }
}

export default databaseConfig
