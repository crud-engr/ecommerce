import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
    public async index({response}: HttpContextContract) {
        return response.status(200).json({
            status: 'success',
            message: 'welcome to adonisjs ecommerce api',
            Author: 'Abeeb Ayinla',
            API_TYPE: 'REST'
        })
    }
}
