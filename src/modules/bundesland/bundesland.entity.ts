import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BundeslandFeiertag } from '../bundesland_feiertag/bundesland_feiertag.entity';
import { Benutzer } from '../Benutzer/benutzer.entity';

@Entity()
export class Bundesland {
  @PrimaryGeneratedColumn({ type: "int" })
  BundeslandID: number;

  @Column({ type: "varchar", length: 2})
  Abkürzung: string;

  @Column({ type: "varchar", length: 50})
  Name: string;

  @OneToMany(() => BundeslandFeiertag, bundeslandFeiertag => bundeslandFeiertag.Bundesland)
  bundeslaender: BundeslandFeiertag[];

  @OneToMany(() => Benutzer, benutzer => benutzer.bundesland)
  alleBenutzer: Benutzer[];
  
}