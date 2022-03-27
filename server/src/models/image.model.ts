import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Container} from './container.model';

@model()
export class Image extends Entity {
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
    type: 'number',
    default: 0,
  })
  size?: number;

  @property({
    type: 'number',
    default: 0,
  })
  percent_cloudMemory_used?: number;

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

  @belongsTo(() => Container)
  containerId: string;

  constructor(data?: Partial<Image>) {
    super(data);
  }
}

export interface ImageRelations {
  // describe navigational properties here
}

export type ImageWithRelations = Image & ImageRelations;
