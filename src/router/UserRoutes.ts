import IRoutes from './RouteInterface'
import {Router, Request, Response} from 'express'

// controller 
import UserControler from '../controllers/UserController'
class UserRoutes implements IRoutes {
    public router : Router
    constructor () {
        this.router = Router()
        this.routes()
    }
    public routes() : void {
        this.router.get('/', UserControler.read)
        this.router.post('/create', UserControler.create)
        this.router.put('/update/:id', UserControler.update)
        this.router.delete('/delete/:id', UserControler.delete)
    }
}

export default new UserRoutes().router