import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Tab_Item } from './entity/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Tab_Item)
    private readonly itemRepository: Repository<Tab_Item>,
  ) {}

  async createOrUpdate(item: Tab_Item): Promise<Tab_Item> {
    return await this.itemRepository.save(item);
  }

  async findOne(id: number): Promise<Tab_Item> {
    return await this.itemRepository.findOne({ where: { item_id: id } });
  }

  async findAll(): Promise<Tab_Item[]> {
    return await this.itemRepository.find();
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.itemRepository.delete({ item_id: id });
  }
}
