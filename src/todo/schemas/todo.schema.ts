import { Schema, SchemaFactory,Prop } from '@nestjs/mongoose'

export class Todo {
    @Prop()
    category : string

    @Prop()
    tran_type : string

    @Prop()
    amount  : string
}

export const todoschema = SchemaFactory.createForClass(Todo)