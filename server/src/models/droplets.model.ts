import {Entity, model, property} from '@loopback/repository';

@model()
export class Droplets extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'number',
    required: true,
  })
  memory: number;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  features: string[];

  @property({
    type: 'number',
    required: true,
  })
  disk: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'object',
    required: true,
  })
  image: object;

  @property({
    type: 'boolean',
    required: true,
  })
  locked: boolean;

  @property({
    type: 'object',
    required: true,
  })
  networks: object;

  @property({
    type: 'object',
    required: true,
  })
  region: object;

  @property({
    type: 'object',
    required: true,
  })
  size: object;

  @property({
    type: 'string',
    required: true,
  })
  status: string;


  constructor(data?: Partial<Droplets>) {
    super(data);
  }
}

export interface DropletsRelations {
  // describe navigational properties here
}

export type DropletsWithRelations = Droplets & DropletsRelations;
