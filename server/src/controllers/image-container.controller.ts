import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Image,
  Container,
} from '../models';
import {ImageRepository} from '../repositories';

export class ImageContainerController {
  constructor(
    @repository(ImageRepository)
    public imageRepository: ImageRepository,
  ) { }

  @get('/images/{id}/container', {
    responses: {
      '200': {
        description: 'Container belonging to Image',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Container)},
          },
        },
      },
    },
  })
  async getContainer(
    @param.path.string('id') id: typeof Image.prototype.id,
  ): Promise<Container> {
    return this.imageRepository.container(id);
  }
}
