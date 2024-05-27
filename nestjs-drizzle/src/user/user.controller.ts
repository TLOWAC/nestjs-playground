import { Get } from '@nestjs/common';

export class UserController {
  @Get('')
  getUsers() {
    return 'Hello World';
  }
}
