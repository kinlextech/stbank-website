import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Currency extends BaseModel {
  //cur_flag	cur_descr_en	cur_descr
  @column({ isPrimary: true,columnName:'cur_id' })
  public id: string

  @column()
  public flag: string
  public descen: string
  public descla: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
