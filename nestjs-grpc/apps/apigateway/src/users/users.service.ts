import { Inject, Injectable } from '@nestjs/common';
import {
  UpdateUserDto,
  USERS_SERVICE_NAME,
  CreateUserDto,
  UsersServiceClient,
  PaginationDto,
} from '@app/common';
import { ClientGrpc } from '@nestjs/microservices';
import { AUTH_SERVICE_NAME } from '../constants';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class UsersService {
  // users gRPC service client 선언
  private usersService: UsersServiceClient;

  // AUTH_SERVICE_NAME 주입.
  // client gRPC 타입의 client 변수 선언
  constructor(@Inject(AUTH_SERVICE_NAME) private client: ClientGrpc) {}

  OnModuleInit() {
    // USERS_SERVICE_NAME 라는 이름의 gRPC service client 를 가져와 usersService 에 할당.
    this.usersService =
      this.client.getService<UsersServiceClient>(USERS_SERVICE_NAME);
  }

  create(createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  findAll() {
    return this.usersService.findAllUsers({});
  }

  findOne(id: string) {
    return this.usersService.findOneUser({ id });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser({ id, ...updateUserDto });
  }

  remove(id: string) {
    return this.usersService.removeUser({ id });
  }

  emailUser() {
    const users$ = new ReplaySubject<PaginationDto>();

    users$.next({ page: 0, skip: 25 });
    users$.next({ page: 1, skip: 25 });
    users$.next({ page: 2, skip: 25 });
    users$.next({ page: 3, skip: 25 });

    users$.complete();

    let chunkNum = 1;

    this.usersService.queryUsers(users$).subscribe((users) => {
      console.log('Chunk', chunkNum, users);
      chunkNum += 1;
    });
  }
}
