import {
  Controller,
  Post,
  Put,
  Body,
  Get,
  Delete,
  Param,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Tab_Item } from './entity/item.entity';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createItem(@Body() newItem: CreateItemDto): Promise<Tab_Item> {
    const item = new Tab_Item();
    item.item_name = newItem.item_name;
    item.item_status = newItem.item_status;
    item.upd_datetime = new Date();
    return await this.itemService.createOrUpdate(item);
  }

  @Get()
  async findItems(): Promise<Tab_Item[]> {
    return await this.itemService.findAll();
  }

  @Get(':id')
  async findItem(@Param('id') id: number): Promise<Tab_Item> {
    return await this.itemService.findOne(id);
  }

  @Put(':id')
  async updateItem(
    @Param('id') id: number,
    @Body() createItemDto: CreateItemDto,
  ): Promise<Tab_Item> {
    const item = await this.itemService.findOne(id);
    item.item_name = createItemDto.item_name;
    item.item_status = createItemDto.item_status;
    item.upd_datetime = new Date();
    return await this.itemService.createOrUpdate(item);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: number): Promise<any> {
    await this.itemService.delete(id);
    return { success: true };
  }
}
