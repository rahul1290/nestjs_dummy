import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User,UserDocument } from './schemas/user.scema';
import { CreateUserDto } from './dtos/create-user.dto'

@Injectable()
export class UsersService {

   constructor(@InjectModel(User.name) private readonly userModel : Model<UserDocument>){}

    allUsers(){
        return this.userModel.find().exec();
    }

    async createUser(createUser : CreateUserDto){
        const userCreated = await this.userModel.create(createUser)
        return userCreated
    }
}
