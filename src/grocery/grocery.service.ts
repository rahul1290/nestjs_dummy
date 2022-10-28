import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateGroceryDto } from './dtos/create-grocery.dto';
import { GroceryModule } from './grocery.module';
import { Grocery } from './schemas/grocery.schema';

@Injectable()
export class GroceryService {

    constructor(@InjectModel(Grocery.name) private groceryModel : Model<GroceryModule>){}

    async allGroceries(){
        const allGrocery = await this.groceryModel.find().exec();
        return allGrocery
    }

    async createGrocery(groceryData : CreateGroceryDto){
       return await this.groceryModel.create(groceryData)
    }
}
