import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodoService } from './todo.service'

@Controller('todo')
export class TodoController {

    constructor(private todoservice : TodoService){}

    @Get('/')
    allTodos(){
        try {
            const Todos = this.todoservice.allTodos()   
            return Todos
        } catch (error) {
            return error
        }
    }

    @Post('/')
   async createTodo(@Body() tododata:CreateTodoDto){
        return await this.todoservice.createTodo(tododata)       
    }
}
