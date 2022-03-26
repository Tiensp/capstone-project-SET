import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {TntDataSource} from '../datasources';
import {User, UserRelations, Cloud} from '../models';
import {CloudRepository} from './cloud.repository';

export type Credentials = {
  email: string;
  password: string;
}

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly clouds: HasManyRepositoryFactory<Cloud, typeof User.prototype.id>;

  constructor(
    @inject('datasources.TNT') dataSource: TntDataSource, @repository.getter('CloudRepository') protected cloudRepositoryGetter: Getter<CloudRepository>,
  ) {
    super(User, dataSource);
    this.clouds = this.createHasManyRepositoryFactoryFor('clouds', cloudRepositoryGetter,);
    this.registerInclusionResolver('clouds', this.clouds.inclusionResolver);
  }
}
