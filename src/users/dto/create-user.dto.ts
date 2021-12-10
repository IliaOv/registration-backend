import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {
	@ApiProperty({ example: "Brown", description: "Surname" })
	readonly surname: string;

	@ApiProperty({ example: "Jack", description: "Name" })
	readonly name: string;

	@ApiProperty({ example: "Ivanovich", description: "Patronymic" })
	readonly patronymic: string;

	@ApiProperty({ example: "qwerty1", description: "Password" })
	readonly password: string;

	@ApiProperty({ example: "+7 (910) 910-91-00", description: "Phone" })
	readonly phone: string;

	@ApiProperty({ example: "user@mail.ru", description: "Email" })
	readonly email: string;

	@ApiProperty({ example: "1234567890", description: "Inn" })
	readonly inn: string;
}
