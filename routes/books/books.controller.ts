import { Books } from '../../models/books';


export async function getBooks(req: any, res : any){
    res.send(await Books.findAll())
}

export async function getBook(req : any , res : any){
    res.send(await Books.findOne({ where: { id: req.params.id } }))
}


