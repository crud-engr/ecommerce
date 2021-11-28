// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import {schema} from '@ioc:Adonis/Core/Validator'
import ProductSubCategory from 'App/Models/ProductSubCategory';

export default class ProductSubCategoriesController {
    public async index({request, response}: HttpContextContract) {
        try {
            const page = request.input('page', 1);
            const limit = request.input('per_page', 10);
            const category = await ProductSubCategory.query().paginate(page, limit);
            return response.status(200).json({
                status: 'success',
                message: 'sub categories successfully fetched',
                data: category
            });
        } catch {
            return response.status(500).json({
                status: 'error',
                message: 'server error',
            });
        }
    }

    public async store({request, response}: HttpContextContract) {
        try {
            const categorySchema = schema.create({
                name: schema.string({trim: true}),
                status: schema.number(),
                product_category_id: schema.number()
            });
    
            const payload: any = await request.validate({schema: categorySchema});
            const category = await ProductSubCategory.create(payload);
    
            return response.status(201).json(
                {
                    status: 'success',
                    message: 'sub category successfully created',
                    data: category
                }
            );
        } catch (error) {
            return response.status(500).json({
                status: 'error',
                message: 'server error',
            });
        }
    }

    public async show({params, response}: HttpContextContract) {
        try {
            const product = await ProductSubCategory.findBy('id', params.id);
            if(!product) return response.status(404).json(
                {
                    status: 'fail',
                    message: 'sub category not found',
                }
            )
            return response.status(200).json(
                {
                    status: 'success',
                    message: 'sub category successfully fetched',
                    data: product,
                }
            );
        } catch (error) {
            return response.status(500).json({
                status: 'error',
                message: 'server error',
            });
        }
    }

    public async update({params, request, response}: HttpContextContract) {
        try {
            // find product
            const product = await ProductSubCategory.findBy('id', params.id);
            if(!product) return response.status(404).json({
                status: 'fail',
                message: 'sub category not found',
            });

            // set update field
            product.name = request.input('name');
            product.status = request.input('status');
            product.product_category_id = request.input('product_category_id');

            // retun updated product
            const updatedProduct = await product.save();
            return response.status(200).json({
                status: 'success',
                message: 'category successfully updated',
                data: updatedProduct,
            });
        } catch (error) {
            return response.status(500).json({
                status: 'error',
                message: 'server error',
            });
        }
    }

    public async destroy({params, response}:HttpContextContract) {
        try {
            const product = await ProductSubCategory.findBy('id', params.id);
            if(!product) return response.status(404).json(
                {
                    status: 'fail',
                    message: 'sub category not found',
                }
            )
            // delete product if found
            product.delete();
            return response.status(204).json(
                {
                    status: 'success',
                    message: 'sub category successfully deleted',
                    data: null,
                }
            );
        } catch (error) {
            return response.status(500).json({
                status: 'error',
                message: 'server error',
            });
        }
    }
}
