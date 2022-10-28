import { IsString,IsNumber } from 'class-validator'

export class CreateGroceryDto {
    @IsString()
    name : string

    @IsNumber()
    price : number
}