import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoModule } from './todo.module';
import { CreateTodoDto } from './dtos/create-todo.dto'

@Injectable()
export class TodoService {

    constructor(@InjectModel('todo') private todoModel : Model<TodoModule>){}

    async allTodos(){
        try {
            const allTodos = await this.todoModel.find().exec()
            return allTodos
        } catch (error) {
            return error
        }
    }

    async createTodo(todoBody : CreateTodoDto) {
        const todo = await this.todoModel.create(todoBody)        
        return todo
    }
}
