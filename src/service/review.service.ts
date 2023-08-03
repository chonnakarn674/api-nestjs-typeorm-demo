import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Review } from '../entity/review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  async createOrUpdate(item: Review): Promise<Review> {
    return await this.reviewRepository.save(item);
  }

  async findOne(id: number): Promise<Review> {
    return await this.reviewRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Review[]> {
    return await this.reviewRepository.find();
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.reviewRepository.delete({ id });
  }
}
