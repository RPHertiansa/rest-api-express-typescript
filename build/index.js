"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var compression_1 = __importDefault(require("compression"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
// routes
var UserRoutes_1 = __importDefault(require("./router/UserRoutes"));
var ProductRoutes_1 = __importDefault(require("./router/ProductRoutes"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.plugin();
        this.routes();
    }
    App.prototype.plugin = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(morgan_1.default("dev"));
        this.app.use(compression_1.default());
        this.app.use(cors_1.default());
        this.app.use(helmet_1.default());
    };
    App.prototype.routes = function () {
        this.app.use('/user', UserRoutes_1.default);
        this.app.use('/product', ProductRoutes_1.default);
        this.app.route("/users").get(function (req, res) {
            res.send("aas");
        });
    };
    return App;
}());
var port = 8000;
var app = new App().app;
app.listen(port, function () {
    console.log("server listen on port " + port);
});
// const app = express()
// app.listen(8000, ()=> console.log('server listen on port 3000'))
// app.get('/', (_req: any, _res: any) => {
//     _res.send('hai manis')
// })
