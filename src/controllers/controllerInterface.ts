
import {Request, Response} from 'express'
interface IController {
    read(req: Request, res: Response) : Response
    index(req: Request, res: Response) : Response
    create(req: Request, res: Response) : Response
    update(req: Request, res: Response) : Response
    delete(req: Request, res: Response) : Response
}

export default IController