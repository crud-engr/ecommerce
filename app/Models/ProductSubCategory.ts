import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class ProductSubCategory extends BaseModel {
  @hasMany(() => Product)
  public product: HasMany<typeof Product>

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public status: string

  @column()
  public product_category_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
