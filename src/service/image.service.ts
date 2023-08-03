import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Image } from '../entity/image.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private readonly itemRepository: Repository<Image>,
  ) {}

  async createOrUpdate(item: Image): Promise<Image> {
    return await this.itemRepository.save(item);
  }

  async findOne(id: number): Promise<Image> {
    return await this.itemRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Image[]> {
    return await this.itemRepository.find();
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.itemRepository.delete({ id });
  }
}
