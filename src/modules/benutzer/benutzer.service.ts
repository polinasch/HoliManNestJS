import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Benutzer } from './benutzer.entity';

@Injectable()
export class BenutzerService {
    constructor(
        @InjectRepository(Benutzer)
        private benutzerRepository: Repository<Benutzer>,
      ) {}
    
      getAllBenutzer(): Promise<Benutzer[]> {
        return this.benutzerRepository.find();
      }
    
      findBenutzerByID(id: string): Promise<Benutzer> {
        return this.benutzerRepository.findOne(id);
      }
    
      async deleteBenutzer(id: string): Promise<void> {
        await this.benutzerRepository.delete(id);
      }
}