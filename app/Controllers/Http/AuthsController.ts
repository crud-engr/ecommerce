import AuthsRepository from 'App/Repository/AuthsRepository';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthsController {
    public async signup(request: HttpContextContract) {
        return new AuthsRepository().signup(request);
    }

    public async signin(request: HttpContextContract) {
        return new AuthsRepository().signin(request);
    }
}
