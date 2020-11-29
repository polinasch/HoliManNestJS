import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Benutzer } from '../benutzer/benutzer.entity';
import { Transform } from 'class-transformer';

@Entity()
export class Urlaubsantrag {
    @PrimaryGeneratedColumn({ type: "int" })
    AntragID: number;

    @Column({ type: "varchar", length: 50 })
    Urlaubsart: string;

    @Column({ type: "varchar", length: 50})
    Status: string;

    @Transform(von => von.format('YYYY-MM-DD'))
    @Column()
    von: Date;

    @Transform(von => von.format('YYYY-MM-DD'))
    @Column()
    bis: Date;

    @Column({ type: "varchar", length: 50})
    Grund: string;

    @Column()
    informiert: boolean;

    @ManyToOne(() => Benutzer, benutzer => benutzer.anträge)
    benutzer: Benutzer;



}