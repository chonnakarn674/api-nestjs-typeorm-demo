import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tab_Item } from './entity/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tab_Item])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
