import { fastify } from "fastify"
import * as dotenv from "dotenv"
import { Database } from "./config/database"
import booksRoutes from "./routes/books/books.routes"




const app = fastify()
dotenv.config()


async function main() {



    await Database.authenticate().then(() => {
        console.log("Connected to database")
    }).catch((err) => {
        console.log("Database connection failed")
        console.log(err)
    })

    
    app.register(booksRoutes, { prefix: "/books" });


    app.setSchemaErrorFormatter((errors, dataVar) => {
        return Error("Schema validation failed")
    });

    let host = process.env.SERVER_HOST || "localhost"
    let port = process.env.SERVER_PORT || 3000
        
    app.register(require('@fastify/cors'))
    
    
    app.listen({
        host: host,
        port: Number(port)
    }).then(() => {
        console.log('Server started at http://' + host + ':' + port + '/')
    }).catch((err) => {
        console.log("Server failed to start")
        console.log(err)
    })
    
}

main()

