import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Urlaubsantrag } from './urlaubsantrag.entity';

@Injectable()
export class UrlaubsantragService {
    constructor(
        @InjectRepository(Urlaubsantrag)
        private urlaubsantragRepository: Repository<Urlaubsantrag>,
      ) {}
    
      getAllAntraege(): Promise<Urlaubsantrag[]> {
        return this.urlaubsantragRepository.find();
      }
    
      findAntragByID(id: string): Promise<Urlaubsantrag> {
        return this.urlaubsantragRepository.findOne(id);
      }
    
      async deleteAntrag(id: string): Promise<void> {
        await this.urlaubsantragRepository.delete(id);
      }
}