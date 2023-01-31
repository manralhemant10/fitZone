import { IsNotEmpty } from "class-validator"

export class CreateUserReqDTO{
    @IsNotEmpty()
    private username: string
    @IsNotEmpty()
    private password: string

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

}