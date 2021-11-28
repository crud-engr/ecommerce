import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import ProductSubCategory from './ProductSubCategory'

export default class ProductCategory extends BaseModel {
  @hasMany(() => Product)
  public product: HasMany<typeof Product>

  @hasOne(() => ProductSubCategory)
  public product_sub_category: HasOne<typeof ProductSubCategory>

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
