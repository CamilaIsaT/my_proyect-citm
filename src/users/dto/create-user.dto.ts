import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
    @ApiProperty({ required: true, example: 'usuario@empresa.com'})

    email: string;

    @ApiProperty({ required: true, example: 'Odiseo'})
    name: string;


    username?: string;

    @ApiProperty({ required: true, example: 'password123'})
    password: string;

    @ApiProperty({ required: true, example: 1, description:'Id del tenant'})
    tenantId: number;
}
