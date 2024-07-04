import { Prop, Schema } from '@nestjs/mongoose';
import { AbstractDocument } from '../database';

@Schema({ versionKey: false })
export class RoleDocument extends AbstractDocument {
  @Prop()
  name: string;
}
