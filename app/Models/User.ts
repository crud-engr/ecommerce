import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import Product from './Product'

export default class User extends BaseModel {
  @hasMany(() => Product)
  public product: HasMany<typeof Product>

  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column()
  public email: string

  @column({serializeAs: null}) // hide password in response
  public password: string

  @column()
  public remeber_me_token: string

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public address: string

  @column()
  public contact_number: string

  @column()
  public type: Array<string> = ['ADMIN', 'USER']

  @column()
  public status: Array<string> = ['ACTIVE', 'INACTIVE']

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
