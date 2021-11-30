import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema} from '@ioc:Adonis/Core/Validator'
import Product from 'App/Models/Product';

// the product repository
export default class ProductsRepository {
    public async index({request, response}: HttpContextContract) {
        try {
            const page = request.input('page', 1);
            const limit = request.input('per_page', 10);
            const product = await Product.query().paginate(page, limit);
            return response.status(200).json({
                status: 'success',
                message: 'products successfully fetched',
                data: product
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
            const productSchema = schema.create(
                {
                    title: schema.string({trim: true}),
                    description: schema.string(),
                    day_type: schema.string(),
                    calender_days: schema.string(),
                    address: schema.string(),
                    user_id: schema.number(),
                }
            );
    
            const payload: any = await request.validate({schema: productSchema});
            const product = await Product.create(payload);
    
            return response.status(201).json(
                {
                    status: 'success',
                    message: 'Product successfully created',
                    data: product
                }
            );
        } catch {
            return response.status(500).json({
                status: 'error',
                message: 'server error',
            });
        }
    }

    public async show({params, response}: HttpContextContract) {
        try {
            const product = await Product.findBy('id', params.id);
            if(!product) return response.status(404).json(
                {
                    status: 'fail',
                    message: 'product not found',
                }
            )
            return response.status(200).json(
                {
                    status: 'success',
                    message: 'Product successfully fetched',
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
            const product = await Product.findBy('id', params.id);
            if(!product) return response.status(404).json(
                {
                    status: 'fail',
                    message: 'product not found',
                }
            )

            // set update field
            product.title = request.input('title');
            product.day_type = request.input('day_type');
            product.calender_days = request.input('calender_days');
            product.description = request.input('description');
            product.address = request.input('address');
            product.user_id = request.input('user_id');

            // retun updated product
            const updatedProduct = await product.save();
            return response.status(200).json(
                {
                    status: 'success',
                    message: 'Product successfully updated',
                    data: updatedProduct,
                }
            )
        } catch (error) {
            return response.status(500).json({
                status: 'error',
                message: 'server error',
            });
        }
    }

    public async destroy({params, response}:HttpContextContract) {
        try {
            const product = await Product.findBy('id', params.id);
            if(!product) return response.status(404).json(
                {
                    status: 'fail',
                    message: 'product not found',
                }
            )
            product.delete();
            return response.status(204).json(
                {
                    status: 'success',
                    message: 'Product successfully deleted',
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
