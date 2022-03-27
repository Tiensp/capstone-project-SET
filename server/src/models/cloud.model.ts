import {Entity, model, property, hasMany} from '@loopback/repository';
import {Container} from './container.model';

@model()
export class Cloud extends Entity {
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
  namme: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
    default: 0,
  })
  size?: number;

  @property({
    type: 'number',
    default: 0,
  })
  percent_memory_used?: number;

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  hasData?: boolean;

  @property({
    type: 'string',
  })
  security?: string;

  @property({
    type: 'string',
  })
  firewall?: string;

  @property({
    type: 'string',
  })
  securityStatus?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isActive?: boolean;

  @property({
    type: 'date',
    default: new Date(),
  })
  createdAt?: string;

  @property({
    type: 'date',
    default: new Date(),
  })
  updatedAt?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isDeleted?: boolean;

  @property({
    type: 'string',
  })
  userId?: string;

  @hasMany(() => Container)
  containers: Container[];

  constructor(data?: Partial<Cloud>) {
    super(data);
  }
}

export interface CloudRelations {
  // describe navigational properties here
}

export type CloudWithRelations = Cloud & CloudRelations;
