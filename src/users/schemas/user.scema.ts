import { SchemaFactory, Schema,Prop } from '@nestjs/mongoose'

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    name : String

    @Prop()
    age : Number
}

export const userScehema = SchemaFactory.createForClass(User)