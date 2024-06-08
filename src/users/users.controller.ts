import { Body, Controller, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    @Post()
    create(@Body() user: User): Promise<User>{
        return this.usersService.create(user)
    }
}
