import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TntDataSource} from '../datasources';
import {Container, ContainerRelations} from '../models';

export class ContainerRepository extends DefaultCrudRepository<
  Container,
  typeof Container.prototype.id,
  ContainerRelations
> {
  constructor(
    @inject('datasources.TNT') dataSource: TntDataSource,
  ) {
    super(Container, dataSource);
  }
}
