import ProductCategoriesRepository from 'App/Repository/ProductCategoriesRepository';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductCategoriesController {
    public async index(request: HttpContextContract) {
        return new ProductCategoriesRepository().index(request);
    }

    public async store(request: HttpContextContract) {
        return new ProductCategoriesRepository().store(request);
    }

    public async show(request: HttpContextContract) {
        return new ProductCategoriesRepository().show(request);
    }

    public async update(request: HttpContextContract) {
        return new ProductCategoriesRepository().update(request);
    }

    public async destroy(request: HttpContextContract) {
        return new ProductCategoriesRepository().destroy(request);
    }
}
