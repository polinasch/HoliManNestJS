import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Bundesland } from './bundesland.entity';

@Injectable()
export class BundeslandService {
    constructor(
        @InjectRepository(Bundesland)
        private bundeslandRepository: Repository<Bundesland>,
      ) {}
    
      getAllBundeslaender(): Promise<Bundesland[]> {
        return this.bundeslandRepository.find();
      }
    
      findBundeslandByID(id: number): Promise<Bundesland> {
        return this.bundeslandRepository.findOne(id);
      }
    
      async deleteBundesland(id: number): Promise<DeleteResult> {
        return await this.bundeslandRepository.findOne(id).then((value) => {
          return this.bundeslandRepository.delete(value);
        });
      }
}