/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// group all routes
Route.group(() => {

  // product routes with authentication
  Route.group(() => {
    Route.post('products', 'ProductsController.store');
    Route.get('products', 'ProductsController.index');
    Route.get('products/:id', 'ProductsController.show');
    Route.patch('products/:id', 'ProductsController.update');
    Route.delete('products/:id', 'ProductsController.destroy');
  }).middleware('auth');

   // product category routes with authentication
   Route.group(() => {
    Route.post('product-categories', 'ProductCategoriesController.store');
    Route.get('product-categories', 'ProductCategoriesController.index');
    Route.get('product-categories/:id', 'ProductCategoriesController.show');
    Route.patch('product-categories/:id', 'ProductCategoriesController.update');
    Route.delete('product-categories/:id', 'ProductCategoriesController.destroy');
  }).middleware('auth');

  // product sub category routes with authentication
  Route.group(() => {
    Route.post('product-sub-categories', 'ProductSubCategoriesController.store');
    Route.get('product-sub-categories', 'ProductSubCategoriesController.index');
    Route.get('product-sub-categories/:id', 'ProductSubCategoriesController.show');
    Route.patch('product-sub-categories/:id', 'ProductSubCategoriesController.update');
    Route.delete('product-sub-categories/:id', 'ProductSubCategoriesController.destroy');
  }).middleware('auth');

  // authentication routes
  Route.post('signup', 'AuthsController.signup');
  Route.post('signin', 'AuthsController.signin');

}).prefix('api/v1');

// fallback handler for non existing url
Route.get('*', ({ request, response }) => {
  return response.status(404).json(
    {
      status: 'fail',
      message: `The URL ${request.parsedUrl.path} is not found on the server`
    }
  )
})
