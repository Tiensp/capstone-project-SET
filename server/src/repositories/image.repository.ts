import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {TntDataSource} from '../datasources';
import {Image, ImageRelations, Container} from '../models';
import {ContainerRepository} from './container.repository';

export class ImageRepository extends DefaultCrudRepository<
  Image,
  typeof Image.prototype.id,
  ImageRelations
> {

  public readonly container: BelongsToAccessor<Container, typeof Image.prototype.id>;

  constructor(
    @inject('datasources.TNT') dataSource: TntDataSource, @repository.getter('ContainerRepository') protected containerRepositoryGetter: Getter<ContainerRepository>,
  ) {
    super(Image, dataSource);
    this.container = this.createBelongsToAccessorFor('container', containerRepositoryGetter,);
    this.registerInclusionResolver('container', this.container.inclusionResolver);
  }
}
