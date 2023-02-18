import { FastifyInstance } from "fastify";
import * as booksController from "./books.controller";
import { auth } from '../middlewares'



async function booksRoutes(app: FastifyInstance){
    
    app.get('/',{
        preHandler: [auth]
    }, booksController.getBooks)

    app.get('/:id',{
        preHandler: [auth]
    }, booksController.getBook)

   



}

export default booksRoutes