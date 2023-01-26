import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service/prisma.service.service';
import { User } from '@prisma/client';
import { createUserDTO } from './users.dto/createUserDTO';


@Injectable()
export class UsersService {

    constructor(private prisma : PrismaService){ }

    async create(createUserDTO:createUserDTO):Promise<User>{
        return await this.prisma.user.create({
            data:{
                username,
                password
            }
        })
        
    }
}
