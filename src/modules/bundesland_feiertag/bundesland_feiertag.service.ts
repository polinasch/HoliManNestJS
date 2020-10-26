import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BundeslandFeiertag } from './bundesland_feiertag.entity';

@Injectable()
export class BundeslandFeiertagService {
    constructor(
        @InjectRepository(BundeslandFeiertag)
        private bundeslandFeiertagRepository: Repository<BundeslandFeiertag>,
      ) {}
    
      getAllBLFeiertage(): Promise<BundeslandFeiertag[]> {
        return this.bundeslandFeiertagRepository.find();
      }
    
      findBLFeiertagByID(id: string): Promise<BundeslandFeiertag> {
        return this.bundeslandFeiertagRepository.findOne(id);
      }
    
      async deleteBLFeiertag(id: string): Promise<void> {
        await this.bundeslandFeiertagRepository.delete(id);
      }
}