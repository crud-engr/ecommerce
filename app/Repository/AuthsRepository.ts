import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema, rules} from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthsRepository {
    public async signup({request, response}: HttpContextContract) {
        // validate fields
        const userSchema = await schema.create(
            {
                username: schema.string({trim: true}),
                email: schema.string({ trim: true }, [
                    rules.email(),
                    rules.unique({table: 'users', column: 'email'})
                ]),
                password: schema.string({}, [
                    rules.confirmed(),
                ]),
                first_name: schema.string(),
                last_name: schema.string(),
                address: schema.string(),
                contact_number: schema.string(),
            }
        )
        const payload: any = await request.validate({schema: userSchema});
        try {
            const user = await User.create(payload);

            return response.status(201).json(
                {
                    status: 'success',
                    message: 'sign up successful',
                    data: user,
                }
            );
        } catch {
            response.status(400).json({
                status: 'fail',
                message: 'Invalid credentials',
            })
        }
    }

    public async signin({request, response, auth}: HttpContextContract) {
        const email = request.input('email');
        const password = request.input('password');
        try {
            const token = await auth.attempt(email, password);
            const jsonToken = token.toJSON();
            return response.status(200).json({
                status: 'success',
                message: 'signin successful',
                token: jsonToken
            })
        } catch {
            return response.status(400).json({
                status: 'fail',
                message: 'Invalid credentials',
            })
        }
    }
}
