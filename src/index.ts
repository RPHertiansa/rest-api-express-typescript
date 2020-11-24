import express, {Request, Response, Application} from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import {config as dotenv} from 'dotenv'

// routes
import UserRoutes from './router/UserRoutes'
import ProductRoutes from './router/ProductRoutes'
import AuthRoutes from './router/AuthRouter'
class App {
    public app: Application
    constructor () {
        this.app = express()
        this.plugin()
        this.routes()
        dotenv()
        
    }
        protected plugin() : void {
            this.app.use(bodyParser.json())
            this.app.use(bodyParser.urlencoded({extended: false}))
            this.app.use(morgan("dev"))
            this.app.use(compression())
            this.app.use(cors())
            this.app.use(helmet())
        }
    protected routes() : void {
        this.app.use('/user', UserRoutes)
        this.app.use('/product', ProductRoutes)
        this.app.use('/auth', AuthRoutes)
        this.app.route("/users").get((req: Request, res: Response) => {
            res.send("aas")
        })
    }
}
let port: Number = 8000
let app = new App().app

app.listen(port, () => {
    console.log(`server listen on port ${port}`)
})
// const app = express()
// app.listen(8000, ()=> console.log('server listen on port 3000'))
// app.get('/', (_req: any, _res: any) => {
//     _res.send('hai manis')
// })