import moment = require("moment");
import {IsArray, IsDefined, IsInt, IsString, ValidateNested} from "class-validator";
import {CreateProductDTO} from "./create-product-dto";
import {Type} from "class-transformer";
import {Product} from "../interface/product";

export class CreateOrderDTO {
    @IsDefined()
    @IsInt()
    customerId: number;

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => CreateProductDTO)
    items: Product[];

    @IsDefined()
    @IsString()
    deliveryTime: moment.Moment;
}
