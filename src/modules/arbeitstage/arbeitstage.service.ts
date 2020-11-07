import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Arbeitstage } from './arbeitstage.entity';
import { CreateArbeitstage, UpdateArbeitstage } from './dto/index';

@Injectable()
export class ArbeitstageService {
    constructor(
        @InjectRepository(Arbeitstage)
        private arbeitstageRepository: Repository<Arbeitstage>,
      ) {}
    
      async getAllArbeitstage(): Promise<Arbeitstage[]> {
        return this.arbeitstageRepository.find({ relations: ['benutzer']});
      }
    
      async findArbeitstageByID(id: number): Promise<Arbeitstage> {
        return this.arbeitstageRepository.findOne(id, { relations: ['benutzer']});
      }

      async createArbeitstage(arbeitstage: CreateArbeitstage) {
        const tage = this.arbeitstageRepository.create(arbeitstage);
        await this.arbeitstageRepository.save(arbeitstage);
        return tage;
      }

      async updateArbeitstage(arbeitstage: UpdateArbeitstage): Promise<UpdateResult> {
        return await this.arbeitstageRepository.update(arbeitstage.TageID, arbeitstage);
      }
    
      async deleteArbeitstage(id: number): Promise<DeleteResult> {
        return await this.arbeitstageRepository.findOne(id).then((value) => {
          return this.arbeitstageRepository.delete(value);
        });
      }
}
