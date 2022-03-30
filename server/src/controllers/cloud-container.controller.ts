import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Cloud,
  Container,
} from '../models';
import {CloudRepository} from '../repositories';

export class CloudContainerController {
  constructor(
    @repository(CloudRepository) protected cloudRepository: CloudRepository,
  ) { }

  @get('/clouds/{id}/containers', {
    responses: {
      '200': {
        description: 'Array of Cloud has many Container',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Container)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Container>,
  ): Promise<Container[]> {
    return this.cloudRepository.containers(id).find(filter);
  }

  @post('/clouds/{id}/containers', {
    responses: {
      '200': {
        description: 'Cloud model instance',
        content: {'application/json': {schema: getModelSchemaRef(Container)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Cloud.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Container, {
            title: 'NewContainerInCloud',
            exclude: ['id'],
            optional: ['cloudId']
          }),
        },
      },
    }) container: Omit<Container, 'id'>,
  ): Promise<Container> {
    return this.cloudRepository.containers(id).create(container);
  }

  @patch('/clouds/{id}/containers', {
    responses: {
      '200': {
        description: 'Cloud.Container PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Container, {partial: true}),
        },
      },
    })
    container: Partial<Container>,
    @param.query.object('where', getWhereSchemaFor(Container)) where?: Where<Container>,
  ): Promise<Count> {
    return this.cloudRepository.containers(id).patch(container, where);
  }

  @del('/clouds/{id}/containers', {
    responses: {
      '200': {
        description: 'Cloud.Container DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Container)) where?: Where<Container>,
  ): Promise<Count> {
    return this.cloudRepository.containers(id).delete(where);
  }
}
