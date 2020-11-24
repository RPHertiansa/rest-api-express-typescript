"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
// routes
const UserRoutes_1 = __importDefault(require("./router/UserRoutes"));
const ProductRoutes_1 = __importDefault(require("./router/ProductRoutes"));
const AuthRouter_1 = __importDefault(require("./router/AuthRouter"));
class App {
    constructor() {
        this.app = express_1.default();
        this.plugin();
        this.routes();
        dotenv_1.config();
    }
    plugin() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(morgan_1.default("dev"));
        this.app.use(compression_1.default());
        this.app.use(cors_1.default());
        this.app.use(helmet_1.default());
    }
    routes() {
        this.app.use('/user', UserRoutes_1.default);
        this.app.use('/product', ProductRoutes_1.default);
        this.app.use('/auth', AuthRouter_1.default);
        this.app.route("/users").get((req, res) => {
            res.send("aas");
        });
    }
}
let port = 8000;
let app = new App().app;
app.listen(port, () => {
    console.log(`server listen on port ${port}`);
});
// const app = express()
// app.listen(8000, ()=> console.log('server listen on port 3000'))
// app.get('/', (_req: any, _res: any) => {
//     _res.send('hai manis')
// })
