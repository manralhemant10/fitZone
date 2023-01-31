import { Body, Controller,HttpException,HttpStatus,Logger,Post, ValidationPipe } from '@nestjs/common';
import { CreateUserReqDTO } from './dto/users.create.req.dto';
import { CreateUserResDTO } from './dto/users.create.res.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    private readonly logger = new Logger(UsersController.name)

    constructor(private readonly usersService:UsersService){}

    @Post('create')
    async create(@Body() reqDTO:CreateUserReqDTO):Promise<CreateUserResDTO>{
        this.logger.debug("Entered inside controller "+UsersController.name)
        let createUserResDTO = new CreateUserResDTO() 
        try{
            createUserResDTO = await this.usersService.create(reqDTO)
        }catch(e){
            this.logger.error("Error from "+ UsersController.name + ": "+ e)
            throw new HttpException('kuch galat hai', HttpStatus.BAD_REQUEST);

        }
        createUserResDTO.setStatusCode(201)
        createUserResDTO.setMessage("Success")
        this.logger.debug("Exiting from controller "+UsersController.name)
        return createUserResDTO
    }

    // update(){

    // }

    // delete(){

    // }
}
