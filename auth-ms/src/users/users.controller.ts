import { Body, Controller,Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { createUserDTO } from './users.dto/createUserDTO';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService:UsersService){}

    @Post('create')
    async create(@Body() createUserDTO:createUserDTO):Promise<createUserDTO>{
        return await this.usersService.create(createUserDTO)
        
    }

    // update(){

    // }

    // delete(){

    // }
}
