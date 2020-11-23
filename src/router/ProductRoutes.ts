import IRoutes from "./RouteInterface";
import { Router, Request, Response } from "express";

class ProductRoutes implements IRoutes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }
  public routes(): void {
    this.router.get("/hai", (req: Request, res: Response) => {
      res.send("ini product");
    });
  }
}

export default new ProductRoutes().router;
