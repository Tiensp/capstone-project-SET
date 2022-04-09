import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Droplets} from '../models';
import {DropletsRepository} from '../repositories';

export class DropletsController {
  constructor(
    @repository(DropletsRepository)
    public dropletsRepository : DropletsRepository,
  ) {}

  @post('/droplets')
  @response(200, {
    description: 'Droplets model instance',
    content: {'application/json': {schema: getModelSchemaRef(Droplets)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Droplets, {
            title: 'NewDroplets',
            exclude: ['id'],
          }),
        },
      },
    })
    droplets: Omit<Droplets, 'id'>,
  ): Promise<Droplets> {
    return this.dropletsRepository.create(droplets);
  }

  @get('/droplets/count')
  @response(200, {
    description: 'Droplets model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Droplets) where?: Where<Droplets>,
  ): Promise<Count> {
    return this.dropletsRepository.count(where);
  }

  @get('/droplets')
  @response(200, {
    description: 'Array of Droplets model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Droplets, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Droplets) filter?: Filter<Droplets>,
  ): Promise<Droplets[]> {
    return this.dropletsRepository.find(filter);
  }

  @patch('/droplets')
  @response(200, {
    description: 'Droplets PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Droplets, {partial: true}),
        },
      },
    })
    droplets: Droplets,
    @param.where(Droplets) where?: Where<Droplets>,
  ): Promise<Count> {
    return this.dropletsRepository.updateAll(droplets, where);
  }

  @get('/droplets/{id}')
  @response(200, {
    description: 'Droplets model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Droplets, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Droplets, {exclude: 'where'}) filter?: FilterExcludingWhere<Droplets>
  ): Promise<Droplets> {
    return this.dropletsRepository.findById(id, filter);
  }

  @patch('/droplets/{id}')
  @response(204, {
    description: 'Droplets PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Droplets, {partial: true}),
        },
      },
    })
    droplets: Droplets,
  ): Promise<void> {
    await this.dropletsRepository.updateById(id, droplets);
  }

  @put('/droplets/{id}')
  @response(204, {
    description: 'Droplets PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() droplets: Droplets,
  ): Promise<void> {
    await this.dropletsRepository.replaceById(id, droplets);
  }

  @del('/droplets/{id}')
  @response(204, {
    description: 'Droplets DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.dropletsRepository.deleteById(id);
  }
}
