import { User } from "@prisma/client";
import { createUserDTO } from "../users.dto/createUserDTO";

export class createUserAssembler{

    toEntityObject(createUserDTO:createUserDTO):User{

    }

    fromEntityObject(userEntity:User):createUserDTO{
        
    }
}