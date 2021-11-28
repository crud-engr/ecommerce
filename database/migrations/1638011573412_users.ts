import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token', 255).nullable()
      table.string('username', 255);
      table.string('first_name', 255);
      table.string('last_name', 255);
      table.text('address');
      table.string('contact_number', 255);
      table.enu('type', ['ADMIN', 'USER'], {
        useNative: true,
        enumName: 'users_type_enum',
        existingType: false,
        schemaName: 'public'
      }).defaultTo('ADMIN');
      table.enu('status', ['ACTIVE', 'INACTIVE'], {
        useNative: true,
        enumName: 'users_status_enum',
        existingType: false,
        schemaName: 'public'
      }).defaultTo('ACTIVE');

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
