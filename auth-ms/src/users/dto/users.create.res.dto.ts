import { IsNotEmpty } from "class-validator"
import { BaseResponse } from "src/common/base.response.class"

export class CreateUserResDTO extends BaseResponse {

    private username: string

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }



    
}