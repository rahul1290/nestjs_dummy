import { IsString,IsNumber, IsDecimal } from 'class-validator'
import { Decimal128 } from 'mongoose'

export class CreateTodoDto {

    @IsString()
    category : string

    @IsString()
    tran_type : string

    @IsString()
    amount : string
}