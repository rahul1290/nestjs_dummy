import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateGroceryDto } from './dtos/create-grocery.dto';
import { GroceryService } from './grocery.service';

@Controller('grocery')
export class GroceryController {

    constructor(private groceryService : GroceryService){}

    @Get('/')
    groceryList(){
        return this.groceryService.allGroceries()
    }

    @Post('/')
    async createGrocery(@Body() groceryData : CreateGroceryDto){
        await this.groceryService.createGrocery(groceryData)
    }

}
