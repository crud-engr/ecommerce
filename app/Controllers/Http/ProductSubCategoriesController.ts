import ProductSubCategoriesRepository from 'App/Repository/ProductSubCategoriesRepository';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductController {
    public async index(request: HttpContextContract) {
        return new ProductSubCategoriesRepository().index(request);
    }

    public async store(request: HttpContextContract) {
        return new ProductSubCategoriesRepository().store(request);
    }

    public async show(request: HttpContextContract) {
        return new ProductSubCategoriesRepository().show(request);
    }

    public async update(request: HttpContextContract) {
        return new ProductSubCategoriesRepository().update(request);
    }

    public async destroy(request: HttpContextContract) {
        return new ProductSubCategoriesRepository().destroy(request);
    }
}
