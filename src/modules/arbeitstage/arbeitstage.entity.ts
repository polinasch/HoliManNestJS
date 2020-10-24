import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Benutzer } from '../benutzer/benutzer.entity';

@Entity()
export class Arbeitstage {
  @PrimaryGeneratedColumn({ type: "int" })
  TageID: number;

  @Column()
  Montag: boolean;

  @Column()
  Dienstag: boolean;
  
  @Column()
  Mittwoch: boolean;

  @Column()
  Donnerstag: boolean;

  @Column()
  Freitag: boolean;

  @Column()
  Samstag: boolean;

  @Column()
  Sonntag: boolean;

  @OneToMany(() => Benutzer, benutzer => benutzer.arbeitstage)
  allebenutzer: Benutzer[];
  
}