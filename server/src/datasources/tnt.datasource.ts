import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'TNT',
  connector: 'mongodb',
  url: 'mongodb+srv://TNT:TNTset2021@cluster0.talor.mongodb.net/tnt_db?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: 'tnt_db',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TntDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'TNT';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.TNT', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
