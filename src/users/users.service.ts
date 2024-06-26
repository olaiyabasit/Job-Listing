import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ){}
    create(user: User): Promise<User> {
        return this.usersRepository.save(user)
    }
    findAll(): Promise<User[]>{
        return this .usersRepository.find()
    }
}
