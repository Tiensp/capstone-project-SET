import {Entity, model, property} from '@loopback/repository';

@model()
export class Container extends Entity {
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
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  port?: string;

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
  cloudId?: string;

  constructor(data?: Partial<Container>) {
    super(data);
  }
}

export interface ContainerRelations {
  // describe navigational properties here
}

export type ContainerWithRelations = Container & ContainerRelations;
