"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ProductRoutes = /** @class */ (function () {
    function ProductRoutes() {
        this.router = express_1.Router();
        this.routes();
    }
    ProductRoutes.prototype.routes = function () {
        this.router.get("/hai", function (req, res) {
            res.send("ini product");
        });
    };
    return ProductRoutes;
}());
exports.default = new ProductRoutes().router;
