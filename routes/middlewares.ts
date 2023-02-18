export async function auth(req: any, res: any, next: any) {
    if(true){
        next()
    }else{
        res.status(401).send({ message: 'Unauthorized' })
    }
}
