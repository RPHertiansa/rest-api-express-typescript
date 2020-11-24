import BaseRoutes from './BaseRoutes'
// controller 
import UserControler from '../controllers/UserController'
class UserRoutes extends BaseRoutes {
    public routes() : void {
        this.router.get('/', UserControler.read)
        this.router.post('/create', UserControler.create)
        this.router.put('/update/:id', UserControler.update)
        this.router.delete('/delete/:id', UserControler.delete)
    }
}

export default new UserRoutes().router