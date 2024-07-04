import { AbstractEntity } from '@app/common';
import { Column, Entity } from 'typeorm';

@Entity()
export class ReservationEntity extends AbstractEntity<ReservationEntity> {
  @Column()
  timestamp: Date;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  userId: string;

  @Column()
  invoiceId: string;
}
