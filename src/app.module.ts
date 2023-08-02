import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './item/item.module';
import { Tab_Item } from './item/entity/item.entity';
import { Tab_Type } from './type/entity/type.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'mariadb',
      port: 3306,
      username: 'nestjsadmin',
      password: 'nestjsadmin',
      database: 'nestjsdocker',
      entities: [Tab_Item, Tab_Type],
      synchronize: true,
    }),
    ItemModule,
  ],
})
export class AppModule {}
