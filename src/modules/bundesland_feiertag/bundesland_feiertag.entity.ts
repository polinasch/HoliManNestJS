import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Bundesland } from '../bundesland/bundesland.entity';
import { Feiertag } from '../feiertag/feiertag.entity';

@Entity()
export class BundeslandFeiertag {
  @PrimaryGeneratedColumn({ type: "int" })
  BLFeiertagID: number;

  @Column({ type: "int"})
  Feiertag: number;

  @Column({ type: "int"})
  Bundesland: number;

  @ManyToOne (() => Bundesland, bundesland => bundesland.BundeslandID)
  bundesland = Bundesland;

  @ManyToOne (() => Feiertag, feiertag => feiertag.FeiertagID)
  feiertag = Feiertag;
  
}