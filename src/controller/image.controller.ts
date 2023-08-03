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
import { ImageService } from '../service/image.service';
import { ImageDto } from '../dto/image.dto';
import { Image } from '../entity/image.entity';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createItem(@Body() imageDto: ImageDto): Promise<Image> {
    const item = new Image();
    item.review_id = imageDto.review_id;
    item.base64 = imageDto.base64;
    return await this.imageService.createOrUpdate(item);
  }

  @Get()
  async findItems(): Promise<Image[]> {
    return await this.imageService.findAll();
  }

  @Get(':id')
  async findItem(@Param('id') id: number): Promise<Image> {
    return await this.imageService.findOne(id);
  }

  @Put(':id')
  async updateItem(
    @Param('id') id: number,
    @Body() imageDto: ImageDto,
  ): Promise<Image> {
    const item = await this.imageService.findOne(id);
    item.review_id = imageDto.review_id;
    item.base64 = imageDto.base64;
    return await this.imageService.createOrUpdate(item);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: number): Promise<any> {
    await this.imageService.delete(id);
    return { success: true };
  }
}
