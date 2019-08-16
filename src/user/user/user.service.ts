import { Injectable, Inject } from '@nestjs/common';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async find(id): Promise<User> {
        return await this.userRepository.findOneOrFail(id)
    }

    async create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }
    async update(user: User): Promise<UpdateResult> {
        return await this.userRepository.update(user.id, user);
    }
}
