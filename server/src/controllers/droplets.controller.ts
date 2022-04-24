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
import {URL_OF_DIGITALOCEAN} from '../constant/digitalocean-url';
import axios from 'axios';
require('dotenv').config();

type FileSystemSize = {
  host_id: String;
};

export class DropletsController {
  constructor(
    @repository(DropletsRepository)
    public dropletsRepository: DropletsRepository,
  ) {}

  @post('/droplets')
  @response(200, {
    description: 'Droplets model instance',
    content: {'application/json': {schema: {type: 'object'}}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            title: 'New Droplet',
          },
        },
      },
    })
    droplets: Omit<Droplets, 'id'>,
  ): Promise<object> {
    let droplet = {};
    droplet = axios
      .post(URL_OF_DIGITALOCEAN + 'droplets', droplets, {
        headers: {
          Authorization: 'Bearer ' + process.env.DIGITALOCEAN_API_TOKEN,
        },
      })
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
    return Promise.resolve(droplet);
  }

  @get('/droplets')
  @response(200, {
    description: 'Array of Droplets model instances',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          items: getModelSchemaRef(Droplets),
        },
      },
    },
  })
  async find(): Promise<object> {
    let droplets = {};
    droplets = axios
      .get(URL_OF_DIGITALOCEAN + 'droplets', {
        headers: {
          Authorization: 'Bearer ' + process.env.DIGITALOCEAN_API_TOKEN,
        },
      })
      .then(res => {
        return res.data;
      });
    return Promise.resolve(droplets);
  }


  @get('/droplets/{id}/{requireMonitor}')
  @response(200, {
    description: 'Get Droplet File System Metrics',
    content: {
      'application/json': {
        schema: {
          type: 'object',
        },
      },
    },
  })
  async getFilesystemSize(
    @param.path.string('id') host_id: string,
    @param.path.string('requireMonitor') requireMonitor: string,
  ): Promise<object> {
    let droplets = {};
    droplets = axios
      .get(
        URL_OF_DIGITALOCEAN +
          `monitoring/metrics/droplet/${requireMonitor}?host_id=${host_id}&start=1650788240&end=1650789458`,
        {
          headers: {
            Authorization: 'Bearer ' + process.env.DIGITALOCEAN_API_TOKEN,
          },
        },
      )
      .then(res => {
        return res.data;
      });
    return Promise.resolve(droplets);
  }
  // @get('/droplets/count')
  // @response(200, {
  //   description: 'Droplets model count',
  //   content: {'application/json': {schema: CountSchema}},
  // })
  // async count(@param.where(Droplets) where?: Where<Droplets>): Promise<Count> {
  //   return this.dropletsRepository.count(where);
  // }

  // @patch('/droplets')
  // @response(200, {
  //   description: 'Droplets PATCH success count',
  //   content: {'application/json': {schema: CountSchema}},
  // })
  // async updateAll(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Droplets, {partial: true}),
  //       },
  //     },
  //   })
  //   droplets: Droplets,
  //   @param.where(Droplets) where?: Where<Droplets>,
  // ): Promise<Count> {
  //   return this.dropletsRepository.updateAll(droplets, where);
  // }

  // @get('/droplets/{id}')
  // @response(200, {
  //   description: 'Droplets model instance',
  //   content: {
  //     'application/json': {
  //       schema: getModelSchemaRef(Droplets, {includeRelations: true}),
  //     },
  //   },
  // })
  // async findById(
  //   @param.path.string('id') id: string,
  //   @param.filter(Droplets, {exclude: 'where'})
  //   filter?: FilterExcludingWhere<Droplets>,
  // ): Promise<Droplets> {
  //   return this.dropletsRepository.findById(id, filter);
  // }

  // @patch('/droplets/{id}')
  // @response(204, {
  //   description: 'Droplets PATCH success',
  // })
  // async updateById(
  //   @param.path.string('id') id: string,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Droplets, {partial: true}),
  //       },
  //     },
  //   })
  //   droplets: Droplets,
  // ): Promise<void> {
  //   await this.dropletsRepository.updateById(id, droplets);
  // }

  // @put('/droplets/{id}')
  // @response(204, {
  //   description: 'Droplets PUT success',
  // })
  // async replaceById(
  //   @param.path.string('id') id: string,
  //   @requestBody() droplets: Droplets,
  // ): Promise<void> {
  //   await this.dropletsRepository.replaceById(id, droplets);
  // }

  // @del('/droplets/{id}')
  // @response(204, {
  //   description: 'Droplets DELETE success',
  // })
  // async deleteById(@param.path.string('id') id: string): Promise<void> {
  //   await this.dropletsRepository.deleteById(id);
  // }
}
