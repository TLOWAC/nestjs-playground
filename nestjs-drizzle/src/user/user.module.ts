import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { drizzleProvider } from 'src/drizzle/drizzle.provider';
import { UserController } from './user.controller';

@Module({
  providers: [UserService, drizzleProvider],
  controllers: [UserController],
})
export class UserModule {}
