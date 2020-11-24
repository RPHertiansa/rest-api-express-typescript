"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRoutes_1 = __importDefault(require("./BaseRoutes"));
// controller 
const UserController_1 = __importDefault(require("../controllers/UserController"));
class UserRoutes extends BaseRoutes_1.default {
    routes() {
        this.router.get('/', UserController_1.default.read);
        this.router.post('/create', UserController_1.default.create);
        this.router.put('/update/:id', UserController_1.default.update);
        this.router.delete('/delete/:id', UserController_1.default.delete);
    }
}
exports.default = new UserRoutes().router;
