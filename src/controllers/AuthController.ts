import {Response, Request} from 'express'
const db = require('../db/models')
class AuthController {
    login(req: Request, res: Response) : Response {
        return res.send("ini path login")
    }
    register = async (req: Request, res: Response) : Promise<Response> => {
        try {
            const { username, password } = req.body;
            const data = await db.user.create({ username, password });
            return res.send(data);
        } catch (error) {
            return res.send(error.message)
        }
    }
}

export default new AuthController()