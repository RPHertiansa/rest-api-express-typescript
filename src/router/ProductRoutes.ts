import IRoutes from "./RouteInterface";
import { Router, Request, Response } from "express";

import productControler from "../controllers/productControler";
class ProductRoutes implements IRoutes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }
  public routes(): void {
    this.router.post("/create", productControler.create);
    this.router.get('/getAll', productControler.getAllData)
    this.router.get('/getbyid/:id', productControler.getByid)
    this.router.put('/update/:id', productControler.update)
    this.router.delete('/delete/:id', productControler.delete)
  }
}

export default new ProductRoutes().router;
