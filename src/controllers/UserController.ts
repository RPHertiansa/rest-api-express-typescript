import {Response, Request} from 'express'
import Icontroller from './controllerInterface'

let data : any[] = [
    {   id: 1,
        nama: "farhan ammar",
        role: "backend developer"
    },
    {   id: 2,
        nama: "ging freeces",
        role: "fulllstack develope"
    },
    {   id: 3,
        nama: "farhan ammar",
        role: "backend developer"
    },
]
class UserController implements Icontroller {

    read(req: Request, res: Response) : Response {
        return res.json(data)
    }
    index(req: Request, res: Response) : Response {
        return res.json(data)
    }

    create(req: Request, res: Response) : Response {
        const {nama, role, id} = req.body
        let data2 = data.push({
            id,
            nama,
            role
        })
        return res.send({
            status: "sukses",
            data: data2
        })
    }

    update(req: Request, res: Response) : Response  {
        const {id} = req.params
        const {name} = req.body
        let updateData = data.find(dt => dt.id == id)
        updateData.nama = name
        return res.send(updateData)
    }
    delete(req: Request, res: Response) : Response {
        const {id} = req.params
        let deletes = data.filter(dt => dt.id != id) 
        return res.send(deletes)
    } 
    
}

export default new UserController()