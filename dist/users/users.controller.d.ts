import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(user: User): Promise<User>;
}
