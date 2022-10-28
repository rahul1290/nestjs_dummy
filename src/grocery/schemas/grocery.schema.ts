import { Schema, SchemaFactory,Prop } from '@nestjs/mongoose'

export class Grocery {
    @Prop()
    name : string

    @Prop()
    price : number
}

export const groceryschema = SchemaFactory.createForClass(Grocery)