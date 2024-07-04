import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { AbstractEntity } from '../database';
import { RoleEntity } from './role.entity';

@Entity()
export class UserEntity extends AbstractEntity<UserEntity> {
  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToMany(() => RoleEntity, { cascade: true })
  @JoinTable()
  roles?: RoleEntity[];
}
