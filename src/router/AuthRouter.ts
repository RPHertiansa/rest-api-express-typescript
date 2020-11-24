import IRoute from './RouteInterface'
import {Router, Response, Request} from 'express'
import AuthController from '../controllers/AuthController'

class AuthRoute implements IRoute {
    public router : Router
    constructor () {
        this.router = Router()
        this.routes()
    }
    public routes () : void {
        this.router.post('/login',  AuthController.login)
        this.router.post('/register', AuthController.register)
    }
}

export default new AuthRoute().router