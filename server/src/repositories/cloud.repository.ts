import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {TntDataSource} from '../datasources';
import {Cloud, CloudRelations, Container} from '../models';
import {ContainerRepository} from './container.repository';

export class CloudRepository extends DefaultCrudRepository<
  Cloud,
  typeof Cloud.prototype.id,
  CloudRelations
> {

  public readonly containers: HasManyRepositoryFactory<Container, typeof Cloud.prototype.id>;

  constructor(
    @inject('datasources.TNT') dataSource: TntDataSource, @repository.getter('ContainerRepository') protected containerRepositoryGetter: Getter<ContainerRepository>,
  ) {
    super(Cloud, dataSource);
    this.containers = this.createHasManyRepositoryFactoryFor('containers', containerRepositoryGetter,);
    this.registerInclusionResolver('containers', this.containers.inclusionResolver);
  }
}
