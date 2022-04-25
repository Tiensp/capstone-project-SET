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
    const dateStr = new Date() ;
    const date = new Date(dateStr);
    const timestampInMs = date.getTime();
    const endUNIXTimestamp = Math.floor(timestampInMs / 1000);
    const droplets = axios
      .get(
        URL_OF_DIGITALOCEAN +
          `monitoring/metrics/droplet/${requireMonitor}?host_id=${host_id}&start=1650788240&end=${endUNIXTimestamp}`,
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

  @get('/droplets/{id}')
  @response(200, {
    description: 'Get Droplet Information',
    content: {
      'application/json': {
        schema: {
          type: 'object',
        },
      },
    },
  })
  async getDropletInfo(@param.path.string('id') id: string): Promise<object> {
    let droplets = {};
    droplets = axios
      .get(URL_OF_DIGITALOCEAN + `droplets/${id}`, {
        headers: {
          Authorization: 'Bearer ' + process.env.DIGITALOCEAN_API_TOKEN,
        },
      })
      .then(res => {
        return res.data;
      });
    return Promise.resolve(droplets);
  }
}
