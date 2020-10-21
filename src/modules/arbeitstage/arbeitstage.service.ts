import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Arbeitstage } from './arbeitstage.entity';

@Injectable()
export class ArbeitstageService {
    constructor(
        @InjectRepository(Arbeitstage)
        private arbeitstageRepository: Repository<Arbeitstage>,
      ) {}
    
      getAllArbeitstage(): Promise<Arbeitstage[]> {
        return this.arbeitstageRepository.find();
      }
    
      findArbeitstageByID(id: string): Promise<Arbeitstage> {
        return this.arbeitstageRepository.findOne(id);
      }
    
      async deleteArbeitstage(id: string): Promise<void> {
        await this.arbeitstageRepository.delete(id);
      }
}
