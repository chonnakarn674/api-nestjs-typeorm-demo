import { Module } from '@nestjs/common';
import { ImageController } from '../controller/image.controller';
import { ImageService } from '../service/image.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from '../entity/image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image])],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
