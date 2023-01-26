import { IsNotEmpty } from "class-validator"

export class createUserDTO{
    @IsNotEmpty()
    username: String
    @IsNotEmpty()
    password: String
}