import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userScehema } from './schemas/user.scema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: userScehema,
      }, 
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
