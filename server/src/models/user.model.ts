import {Entity, model, property, hasMany} from '@loopback/repository';
import { RoleEnum } from '../constant/model.enum';
import {Cloud} from './cloud.model';

@model({settings: {strict: false}})
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  fullName: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  phoneNumber: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'date',
    default: new Date(),
  })
  createdAt?: Date;

  @property({
    type: 'date',
    default: new Date(),
  })
  updatedAt?: Date;

  @property({
    type: 'date',
    default: new Date(),
  })
  lastPaymentMade?: Date;

  @property({
    type: 'boolean',
    default: false,
  })
  isDeleted?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  isActive?: boolean;

  @property({
    type: 'number',
    default: 0,
  })
  payment?: number;

  @property({
    type: 'string',
    jsonSchema: {
      enum: Object.values(RoleEnum)
    }
  })
  role?: RoleEnum;

  @hasMany(() => Cloud)
  clouds: Cloud[];
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {

}

export type UserWithRelations = User & UserRelations;
