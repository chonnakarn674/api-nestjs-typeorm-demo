import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user.module';
import { User } from './entity/user.entity';
import { ReviewModule } from './module/review.module';
import { Review } from './entity/review.entity';
import { ImageModule } from './module/image.module';
import { Image } from './entity/image.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'mariadb',
      port: 3306,
      username: 'nestjsadmin',
      password: 'nestjsadmin',
      database: 'nestjsdocker',
      entities: [User, Review, Image],
      synchronize: true,
    }),
    UserModule,
    ReviewModule,
    ImageModule,
  ],
})
export class AppModule {}
