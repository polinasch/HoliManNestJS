import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { BundeslandFeiertag } from './bundesland_feiertag.entity';
import { CreateBundeslandFeiertag, UpdateBundeslandFeiertag } from './dto';

@Injectable()
export class BundeslandFeiertagService {
    constructor(
        @InjectRepository(BundeslandFeiertag)
        private bundeslandFeiertagRepository: Repository<BundeslandFeiertag>,
      ) {}
    
      getAllBLFeiertage(): Promise<BundeslandFeiertag[]> {
        return this.bundeslandFeiertagRepository.find({ relations: ['bundesland', 'feiertag']});
      }
    
      findBLFeiertagByID(id: number): Promise<BundeslandFeiertag> {
        return this.bundeslandFeiertagRepository.findOne(id, { relations: ['bundesland', 'feiertag']});
      }

      async createBLFeiertag(bundesland_feiertag: CreateBundeslandFeiertag) {
        const bl_feiertag = this.bundeslandFeiertagRepository.create(bundesland_feiertag);
        await this.bundeslandFeiertagRepository.save(bundesland_feiertag);
        return bl_feiertag;
      }

      async updateBLFeiertag(bundesland_feiertag: UpdateBundeslandFeiertag): Promise<UpdateResult> {
        return await this.bundeslandFeiertagRepository.update(bundesland_feiertag.BLFeiertagID, bundesland_feiertag);
      }
    
      async deleteBLFeiertag(id: number): Promise<DeleteResult> {
        return await this.bundeslandFeiertagRepository.findOne(id).then((value) => {
          return this.bundeslandFeiertagRepository.delete(value);
        });
      }
}