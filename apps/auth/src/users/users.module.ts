import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { DatabaseMongoModule, UserDocument, UserSchema } from '@app/common';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    DatabaseMongoModule,
    DatabaseMongoModule.forFeature([
      { name: UserDocument.name, schema: UserSchema },
    ]),
    // DatabaseTypeOrmlModule,
    // DatabaseTypeOrmlModule.forFeature([UserEntity, RoleEntity]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
