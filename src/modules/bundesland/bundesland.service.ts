import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    
      findBundeslandByID(id: string): Promise<Bundesland> {
        return this.bundeslandRepository.findOne(id);
      }
    
      async deleteBundesland(id: string): Promise<void> {
        await this.bundeslandRepository.delete(id);
      }
}