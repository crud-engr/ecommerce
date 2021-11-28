import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public day_type: Array<string> = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']

  @column()
  public product_category_id: number
  
  @column()
  public product_sub_category_id: number

  @column()
  public calender_days: string

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public address: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
