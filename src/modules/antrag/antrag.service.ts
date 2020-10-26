import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Antrag } from './antrag.entity';

@Injectable()
export class AntragService {
    constructor(
        @InjectRepository(Antrag)
        private antragRepository: Repository<Antrag>,
      ) {}
    
      getAllAntraege(): Promise<Antrag[]> {
        return this.antragRepository.find();
      }
    
      findAntragByID(id: string): Promise<Antrag> {
        return this.antragRepository.findOne(id);
      }
    
      async deleteAntrag(id: string): Promise<void> {
        await this.antragRepository.delete(id);
      }
}