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
  User,
  Cloud,
} from '../models';
import {UserRepository} from '../repositories';

export class UserCloudController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/clouds', {
    responses: {
      '200': {
        description: 'Array of User has many Cloud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cloud)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Cloud>,
  ): Promise<Cloud[]> {
    return this.userRepository.clouds(id).find(filter);
  }

  @post('/users/{id}/clouds', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cloud)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cloud, {
            title: 'NewCloudInUser',
            exclude: ['id'],
            optional: ['userId']
          }),
        },
      },
    }) cloud: Omit<Cloud, 'id'>,
  ): Promise<Cloud> {
    return this.userRepository.clouds(id).create(cloud);
  }

  @patch('/users/{id}/clouds', {
    responses: {
      '200': {
        description: 'User.Cloud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cloud, {partial: true}),
        },
      },
    })
    cloud: Partial<Cloud>,
    @param.query.object('where', getWhereSchemaFor(Cloud)) where?: Where<Cloud>,
  ): Promise<Count> {
    return this.userRepository.clouds(id).patch(cloud, where);
  }

  @del('/users/{id}/clouds', {
    responses: {
      '200': {
        description: 'User.Cloud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Cloud)) where?: Where<Cloud>,
  ): Promise<Count> {
    return this.userRepository.clouds(id).delete(where);
  }
}
