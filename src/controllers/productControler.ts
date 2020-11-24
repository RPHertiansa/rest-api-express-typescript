import {Response, Request} from 'express'
import { where } from 'sequelize/types';
const db = require('../db/models')
class prodductController {
    create = async (req: Request, res: Response) : Promise<Response>  => {
        try {
            const {productName, harga} = req.body;
            const data = await db.category.create({productName, harga})
            return res.send({
                message: "success insert data",
                data: data
            })
        } catch (error) {
            return res.send(error.message)
        }
    }
    getAllData = async (req: Request, res: Response) : Promise <Response> => {
        try {
            const data = await db.category.findAll({})
            return res.send({
                message: "suscces get all data",
                data: data
            })
        } catch (error) {
            return res.send(error.message)
        }
    }
    getByid = async  (req: Request, res: Response) : Promise <Response> =>  {
        try {
            const { id } = req.params;
            const data = await db.category.findOne({ where: { id: id } });
            if( data == null || typeof data == "undefined") {
                 return res.send({
                    message: "data not found"
                })
            } else {
                return res.send({
                    message: "success get by id",
                    data: data
                });
            }
        } catch (error) {
            return res.send({
                message: error.message
            })
        }
    }
    update = async(req: Request, res: Response) : Promise <Response> => {
        try {
            
            const {id} = req.params
            const { productName, harga } = req.body;
            const data = await db.category.update({productName: productName, harga: harga}, {where: {id: id}})
            console.log(id)
            return res.send({
                message: "success update category",
            })
        } catch (error) {
            return res.send({
                message: error.message
            })
        }
    }

    delete = async (req: Request, res: Response) : Promise<Response> => {
        try {
            const {id} = req.params
            const data = await db.category.destroy({
                where : {id: id}
            })
            return res.send({
                message: "success delete",
                data: data
            })
        } catch (error) {
            return res.send({
                message: error.message
            })
        }
    }
}

export default new prodductController()