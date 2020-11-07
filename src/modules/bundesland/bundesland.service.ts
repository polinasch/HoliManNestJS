import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Bundesland } from './bundesland.entity';
import { CreateBundesland, UpdateBundesland } from './dto/index';

@Injectable()
export class BundeslandService {
    constructor(
        @InjectRepository(Bundesland)
        private bundeslandRepository: Repository<Bundesland>,
      ) {}
    
      getAllBundeslaender(): Promise<Bundesland[]> {
        return this.bundeslandRepository.find({ relations: ['bundeslaender', 'alleBenutzer']});
      }
    
      findBundeslandByID(id: number): Promise<Bundesland> {
        return this.bundeslandRepository.findOne(id, { relations: ['bundeslaender', 'alleBenutzer']});
      }

      async createBundesland(bundesland: CreateBundesland) {
        const newBundesland = this.bundeslandRepository.create(bundesland);
        await this.bundeslandRepository.save(bundesland);
        return newBundesland;
      }

      async updateBundesland(bundesland: UpdateBundesland): Promise<UpdateResult> {
        return await this.bundeslandRepository.update(bundesland.BundeslandID, bundesland);
      }
    
      async deleteBundesland(id: number): Promise<DeleteResult> {
        return await this.bundeslandRepository.findOne(id).then((value) => {
          return this.bundeslandRepository.delete(value);
        });
      }
}