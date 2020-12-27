import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Benutzer } from './benutzer.entity';
import { CreateBenutzer } from './dto/index';

@Injectable()
export class BenutzerService {
  constructor(
    @InjectRepository(Benutzer)
    private benutzerRepository: Repository<Benutzer>,
  ) { }

  getAllBenutzer(): Promise<Benutzer[]> {
    return this.benutzerRepository.find({ relations: ['bundesland', 'arbeitstage', 'anträge'] });
  }

  findBenutzerByID(id: number): Promise<Benutzer> {
    return this.benutzerRepository.findOne(id, { relations: ['bundesland', 'arbeitstage', 'anträge'] });
  }

  async findBenutzerByVorgesetzter(id: number): Promise<Benutzer[]> {
    return this.benutzerRepository.find({ where: { Vorgesetzter: id } });
  }

  getAllVorgesetzten(istVorgesetzter: boolean): Promise<Benutzer[]> {
    return this.benutzerRepository.find({ where: { istVorgesetzter: istVorgesetzter } });
  }

  async createBenutzer(benutzer: CreateBenutzer) {
    const nutzer = this.benutzerRepository.create(benutzer);
    await this.benutzerRepository.save(benutzer);
    return nutzer;
  }

  async updateBenutzer(id: number, createBenutzerDTO: CreateBenutzer) {
    let benutzerUpdate = await this.benutzerRepository.findOne({ BenutzerID: id });
    if (!benutzerUpdate) throw new NotFoundException({ message: "Benutzer existiert nicht" });
    return this.benutzerRepository.save({ ...benutzerUpdate, ...createBenutzerDTO });
  }

  async deleteBenutzer(id: number): Promise<DeleteResult> {
    return await this.benutzerRepository.findOne(id).then((value) => {
      return this.benutzerRepository.delete(value);
    });
  }
}