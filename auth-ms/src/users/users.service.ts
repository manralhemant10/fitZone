import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateUserAssembler } from './assembler/users.create.assembler';
import { CreateUserReqDTO } from './dto/users.create.req.dto';
import { CreateUserResDTO } from './dto/users.create.res.dto';

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name)

    constructor(private prisma : PrismaService){ }

    async create(reqDTO:CreateUserReqDTO):Promise<CreateUserResDTO>{
        this.logger.debug("Entered inside service "+UsersService.name)
        let createUserAssembler = new CreateUserAssembler(), res
        
        try{
            res = await this.prisma.user.create({
                data:{
                    username: reqDTO.getUsername(),
                    password: reqDTO.getPassword()
                }
            })
            
        }catch(e){
            this.logger.error("Error from  "+UsersService.name + e)
            throw new Error(e)
        }
        this.logger.debug("Exited from service "+UsersService.name)
        return createUserAssembler.fromEntityObject(res)
        
    }
}
