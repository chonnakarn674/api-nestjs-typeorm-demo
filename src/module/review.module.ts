import { Module } from '@nestjs/common';
import { ReviewController } from '../controller/review.controller';
import { ReviewService } from '../service/review.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from '../entity/review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
