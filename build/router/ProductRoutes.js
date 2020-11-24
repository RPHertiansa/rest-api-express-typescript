"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productControler_1 = __importDefault(require("../controllers/productControler"));
class ProductRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.post("/create", productControler_1.default.create);
        this.router.get('/getAll', productControler_1.default.getAllData);
        this.router.get('/getbyid/:id', productControler_1.default.getByid);
        this.router.put('/update/:id', productControler_1.default.update);
        this.router.delete('/delete/:id', productControler_1.default.delete);
    }
}
exports.default = new ProductRoutes().router;
