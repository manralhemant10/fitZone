
export class BaseResponse {

    private statusCode: number

    private message:string

    public getStatusCode(): number {
        return this.statusCode;
    }

    public setStatusCode(statusCode: number): void {
        this.statusCode = statusCode;
    }

    public getMessage(): string {
        return this.message;
    }

    public setMessage(message: string): void {
        this.message = message;
    }


}