import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { User } from '../entity/user.entity';
import { Review } from '../entity/review.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createOrUpdate(item: User): Promise<User> {
    return await this.userRepository.save(item);
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete({ id });
  }

  async findDetail(id: number): Promise<any> {
    return this.userRepository
      .createQueryBuilder('user')
      .innerJoinAndMapMany(
        'user.user',
        Review,
        'review',
        'user.id = review.user_id',
      )
      .where('user.id = :id', { id })
      .getMany();
  }
}
