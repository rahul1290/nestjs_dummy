import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto'

@Controller('users')
export class UsersController {
    constructor(private usersService : UsersService){}

    @Get('/all')
    allusers() : any {
        return this.usersService.allUsers();
    }

    @Post('/')
    async createUser(@Body() createUserDto : CreateUserDto){
        return await this.usersService.createUser(createUserDto);
    }
}
