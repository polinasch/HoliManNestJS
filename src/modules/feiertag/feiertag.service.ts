import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feiertag } from './feiertag.entity';

@Injectable()
export class FeiertagService {
    constructor(
        @InjectRepository(Feiertag)
        private feiertagRepository: Repository<Feiertag>,
      ) {}
    
      getAllFeiertage(): Promise<Feiertag[]> {
        return this.feiertagRepository.find();
      }
    
      findFeiertagByID(id: string): Promise<Feiertag> {
        return this.feiertagRepository.findOne(id);
      }
    
      async deleteFeiertag(id: string): Promise<void> {
        await this.feiertagRepository.delete(id);
      }
}