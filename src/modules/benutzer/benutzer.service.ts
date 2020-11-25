import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Benutzer } from './benutzer.entity';
import { CreateBenutzer, UpdateBenutzer } from './dto/index';

@Injectable()
export class BenutzerService {
    constructor(
        @InjectRepository(Benutzer)
        private benutzerRepository: Repository<Benutzer>,
      ) {}
    
      getAllBenutzer(): Promise<Benutzer[]> {
        return this.benutzerRepository.find({ relations: ['bundesland', 'arbeitstage', 'anträge']});
      }
    
      findBenutzerByID(id: number): Promise<Benutzer> {
        return this.benutzerRepository.findOne(id, { relations: ['bundesland', 'arbeitstage', 'anträge']});
      }

      getAllVorgesetzten(istVorgesetzter: boolean): Promise<Benutzer[]>{
        return this.benutzerRepository.find({ where: {istVorgesetzter: istVorgesetzter} });
      }

      async createBenutzer(benutzer: CreateBenutzer) {
        const nutzer = this.benutzerRepository.create(benutzer);
        await this.benutzerRepository.save(benutzer);
        return nutzer;
      }

      async updateBenutzer(benutzer: UpdateBenutzer): Promise<UpdateResult> {
        return await this.benutzerRepository.update(benutzer.BenutzerID, benutzer);
      }
    
      async deleteBenutzer(id: number): Promise<DeleteResult> {
        return await this.benutzerRepository.findOne(id).then((value) => {
          return this.benutzerRepository.delete(value);
        });
      }
}