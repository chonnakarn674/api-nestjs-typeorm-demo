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
import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user.dto';
import { User } from '../entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createItem(@Body() userDto: UserDto): Promise<User> {
    const item = new User();
    item.username = userDto.username;
    item.email = userDto.email;
    return await this.userService.createOrUpdate(item);
  }

  @Get()
  async findItems(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findItem(@Param('id') id: number): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Put(':id')
  async updateItem(
    @Param('id') id: number,
    @Body() userDto: UserDto,
  ): Promise<User> {
    const item = await this.userService.findOne(id);
    item.username = userDto.username;
    item.email = userDto.email;
    return await this.userService.createOrUpdate(item);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: number): Promise<any> {
    await this.userService.delete(id);
    return { success: true };
  }

  @Get('/detail/:id')
  async findDetail(@Param('id') id: number): Promise<any> {
    return await this.userService.findDetail(id);
  }
}
