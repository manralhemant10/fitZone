import { User } from "@prisma/client";
import { CreateUserReqDTO } from "../dto/users.create.req.dto";
import { CreateUserResDTO } from "../dto/users.create.res.dto";

export class CreateUserAssembler{

    toEntityObject(reqDTO:CreateUserReqDTO){
        return {
            username: reqDTO.getUsername(),
            password: reqDTO.getPassword()
        }

    }

    fromEntityObject(userEntity:User):CreateUserResDTO{
        let resDTO = new CreateUserResDTO()
        resDTO.setUsername(userEntity.username) 
        return resDTO
    }
}