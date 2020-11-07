import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Feiertag } from './feiertag.entity';
import { CreateFeiertag, UpdateFeiertag } from './dto/index';

@Injectable()
export class FeiertagService {
    constructor(
        @InjectRepository(Feiertag)
        private feiertagRepository: Repository<Feiertag>,
      ) {}
    
      getAllFeiertage(): Promise<Feiertag[]> {
        return this.feiertagRepository.find({ relations: ['feiertage'] });
      }
    
      findFeiertagByID(id: number): Promise<Feiertag> {
        return this.feiertagRepository.findOne(id, { relations: ['feiertage'] });
      }

      async createFeiertag(feiertag: CreateFeiertag) {
        const newFeiertag = this.feiertagRepository.create(feiertag);
        await this.feiertagRepository.save(feiertag);
        return newFeiertag;
      }

      async updateFeiertag(feiertag: UpdateFeiertag): Promise<UpdateResult> {
        return await this.feiertagRepository.update(feiertag.FeiertagID, feiertag);
      }
    
      async deleteFeiertag(id: number): Promise<DeleteResult> {
        return await this.feiertagRepository.findOne(id).then((value) => {
          return this.feiertagRepository.delete(value);
        });
      }
}