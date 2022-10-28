import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GroceryModule } from './grocery/grocery.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nestuser:00rah0ul@cluster0.9zmnk9g.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
    GroceryModule,
    TodoModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
