import {IsDefined, IsNumber, IsString} from "class-validator";

export class CreateProductDTO {
    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @IsNumber()
    price: number;
}
