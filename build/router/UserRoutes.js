"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// controller 
var UserController_1 = __importDefault(require("../controllers/UserController"));
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.router = express_1.Router();
        this.routes();
    }
    UserRoutes.prototype.routes = function () {
        this.router.get('/', UserController_1.default.read);
        this.router.post('/create', UserController_1.default.create);
        this.router.put('/update/:id', UserController_1.default.update);
        this.router.delete('/delete/:id', UserController_1.default.delete);
    };
    return UserRoutes;
}());
exports.default = new UserRoutes().router;
