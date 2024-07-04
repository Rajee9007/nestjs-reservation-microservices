import {
  AbstractMongooseRepository,
  AbstractTypeOrmRepository,
} from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { ReservationDocument } from './models/reservation.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReservationEntity } from './models/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class ReservationsRepository extends AbstractMongooseRepository<ReservationDocument> {
  protected readonly logger = new Logger(ReservationsRepository.name);

  constructor(
    @InjectModel(ReservationDocument.name)
    reservationModel: Model<ReservationDocument>,
  ) {
    super(reservationModel);
  }
}

@Injectable()
export class ReservationsTypeOrmRepository extends AbstractTypeOrmRepository<ReservationEntity> {
  protected readonly logger = new Logger(ReservationsTypeOrmRepository.name);

  constructor(
    @InjectRepository(ReservationEntity)
    private readonly reservationRepository: Repository<ReservationEntity>,
    entityManager: EntityManager,
  ) {
    super(reservationRepository, entityManager);
  }
}
