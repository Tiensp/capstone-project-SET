import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TntDataSource} from '../datasources';
import {Droplets, DropletsRelations} from '../models';

export class DropletsRepository extends DefaultCrudRepository<
  Droplets,
  typeof Droplets.prototype.id,
  DropletsRelations
> {
  constructor(
    @inject('datasources.TNT') dataSource: TntDataSource,
  ) {
    super(Droplets, dataSource);
  }
}
