import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
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
    
      findFeiertagByID(id: number): Promise<Feiertag> {
        return this.feiertagRepository.findOne(id);
      }
    
      async deleteBundesland(id: number): Promise<DeleteResult> {
        return await this.feiertagRepository.findOne(id).then((value) => {
          return this.feiertagRepository.delete(value);
        });
      }
}