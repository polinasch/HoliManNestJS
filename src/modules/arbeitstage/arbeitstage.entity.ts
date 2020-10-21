
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Arbeitstage {
  @PrimaryGeneratedColumn()
  TageID: int;

  @Column()
  Montag: tinyint;

  @Column()
  Dienstag: tinyint;
  
  @Column()
  Mittwoch: tinyint;

  @Column()
  Donnerstag: tinyint;

  @Column()
  Freitag: tinyint;

  @Column()
  Samstag: tinyint;

  @Column()
  Sonntag: tinyint;
  
}