import { Module } from '@nestjs/common';
import { GroceryController } from './grocery.controller';
import { GroceryService } from './grocery.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Grocery, groceryschema } from './schemas/grocery.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Grocery.name,
        schema: groceryschema,
      },
    ]),
  ],
  controllers: [GroceryController],
  providers: [GroceryService],
})
export class GroceryModule {}
