import {Entity, model, property} from '@loopback/repository';

@model()
export class Droplets extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: false,
  })
  id: string;

  @property({
    type: 'number',
    required: false,
  })
  memory: number;

  @property({
    type: 'array',
    itemType: 'string',
    required: false,
  })
  features: string[];

  @property({
    type: 'number',
    required: false,
  })
  disk: number;

  @property({
    type: 'string',
    required: false,
  })
  name: string;

  @property({
    type: 'object',
    required: false,
  })
  image: object;

  @property({
    type: 'boolean',
    required: false,
  })
  locked: boolean;

  @property({
    type: 'object',
    required: false,
  })
  networks: object;

  @property({
    type: 'object',
    required: false,
  })
  region: object;

  @property({
    type: 'object',
    required: false,
  })
  size: object;

  @property({
    type: 'string',
    required: false,
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
