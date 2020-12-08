import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Urlaubsantrag } from './urlaubsantrag.entity';
import { CreateUrlaubsantrag, UpdateUrlaubsantrag } from './dto/index';

@Injectable()
export class UrlaubsantragService {
    constructor(
        @InjectRepository(Urlaubsantrag)
        private urlaubsantragRepository: Repository<Urlaubsantrag>,
      ) {}
    
      async getAllAntraege(): Promise<Urlaubsantrag[]> {
        return this.urlaubsantragRepository.find({ relations: ['benutzer']});
      }
    
      async findAntragByID(id: number): Promise<Urlaubsantrag> {
        return this.urlaubsantragRepository.findOne(id, {relations: ['benutzer']});
      }

      async createAntrag(urlaubsantrag: CreateUrlaubsantrag) {
        const antrag = this.urlaubsantragRepository.create(urlaubsantrag);
        await this.urlaubsantragRepository.save(urlaubsantrag);
        return antrag;
      }
    
      async updateAntrag(id: number, urlaubsantrag: CreateUrlaubsantrag) {
        return await this.urlaubsantragRepository.update( id, urlaubsantrag);
      }
    
      async deleteAntrag(id: number): Promise<DeleteResult> {
        return await this.urlaubsantragRepository.findOne(id).then((value) => {
          return this.urlaubsantragRepository.delete(value);
        });
      }
}