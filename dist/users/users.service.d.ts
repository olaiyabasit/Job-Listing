import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(user: User): Promise<User>;
    findAll(): Promise<User[]>;
}
