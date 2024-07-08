import { User } from '.prisma/client';
import {
  Args,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@ObjectType()
class UserDocument implements User {
  @Field()
  id: number;

  @Field()
  email: string;

  password: string;

  @Field(() => [String], { nullable: true, defaultValue: [] })
  roles: string[];
}

@Resolver(() => UserDocument)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => UserDocument)
  createUser(@Args('createUserInput') createUserInput: CreateUserDto) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [UserDocument], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }
}
