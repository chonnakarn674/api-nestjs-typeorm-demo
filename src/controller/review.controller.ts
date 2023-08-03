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
import { ReviewService } from '../service/review.service';
import { ReviewDto } from '../dto/review.dto';
import { Review } from '../entity/review.entity';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createItem(@Body() reviewDto: ReviewDto): Promise<Review> {
    const item = new Review();
    item.user_id = reviewDto.user_id;
    item.content = reviewDto.content;
    item.status = reviewDto.status;
    return await this.reviewService.createOrUpdate(item);
  }

  @Get()
  async findItems(): Promise<Review[]> {
    return await this.reviewService.findAll();
  }

  @Get(':id')
  async findItem(@Param('id') id: number): Promise<Review> {
    return await this.reviewService.findOne(id);
  }

  @Put(':id')
  async updateItem(
    @Param('id') id: number,
    @Body() reviewDto: ReviewDto,
  ): Promise<Review> {
    const item = await this.reviewService.findOne(id);
    item.user_id = reviewDto.user_id;
    item.content = reviewDto.content;
    item.status = reviewDto.status;
    return await this.reviewService.createOrUpdate(item);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: number): Promise<any> {
    await this.reviewService.delete(id);
    return { success: true };
  }
}
