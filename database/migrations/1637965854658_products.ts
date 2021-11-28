import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('user_id')
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE') // delete product when user is deleted

      table.enu('day_type', ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'], {
        useNative: true,
        enumName: 'products_day_type_enum',
        existingType: false,
        schemaName: 'public'
      })

      table
        .integer('product_category_id')
        .unsigned()
        .references('product_categories.id')
        .onDelete('CASCADE') // delete product when product category is deleted

      table
        .integer('product_sub_category_id')
        .unsigned()
        .references('product_sub_categories.id')
        .onDelete('CASCADE')
        
      table.text('calender_days')
      table.string('title')
      table.string('description')
      table.string('address')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}