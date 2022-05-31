import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({})
export class Photo extends Model<Photo> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fileName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;
}
