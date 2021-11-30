import ProductsRepository from 'App/Repository/ProductsRepository';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductController {
    public async index(request: HttpContextContract) {
        return new ProductsRepository().index(request);
    }

    public async store(request: HttpContextContract) {
        return new ProductsRepository().store(request);
    }

    public async show(request: HttpContextContract) {
        return new ProductsRepository().show(request);
    }

    public async update(request: HttpContextContract) {
        return new ProductsRepository().update(request);
    }

    public async destroy(request: HttpContextContract) {
        return new ProductsRepository().destroy(request);
    }
}
