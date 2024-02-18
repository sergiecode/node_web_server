import { envs } from './config/env.js'
// const { envs } = require('./config/env')

import { startServer } from './server/server.js'
// const { startServer } = require('./server/server')


const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

// Función agnóstica autoconvocada
// Agnóstica por que no tiene nombre
// Autoconvocada porque la ejecutamos con los parentesis
(async () => {
    main()
})()