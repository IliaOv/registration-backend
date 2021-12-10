import { ApiProperty } from "@nestjs/swagger";
import { Column, Model, Table, DataType } from "sequelize-typescript";

interface UserCreationAttrs {
  surname: string;
  name: string;
  patronymic: string;
  password: string;
  phone: string;
  email: string;
  inn: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique identifier" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "Brown", description: "Surname" })
  @Column({ type: DataType.STRING })
  surname: string;

  @ApiProperty({ example: "Jack", description: "Name" })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: "Ivanovich", description: "Patronymic" })
  @Column({ type: DataType.STRING })
  patronymic: string;

  @ApiProperty({ example: "qwerty1", description: "Password" })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: "+7 (910) 910-91-00", description: "Phone" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  phone: string;

  @ApiProperty({ example: "user@mail.ru", description: "Email" })
  @Column({ type: DataType.STRING })
  email: string;

  @ApiProperty({ example: "1234567890", description: "Inn" })
  @Column({ type: DataType.STRING })
  inn: string;

}
