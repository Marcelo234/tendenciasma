import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  @ApiOperation({ description: 'Editar', summary: 'Put Product' })
  @Get('hello-world')
  helloworld() {
    return 'hello world';
  }

  @ApiOperation({ description: 'Agregar producto', summary: 'Post Product' })
  @Post('product')
  agregarusers() {
    return 'Usuario ingresado';
  }
}
