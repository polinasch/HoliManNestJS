import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Benutzer } from '../benutzer/benutzer.entity';

@Entity()
export class Urlaubsantrag {
    @PrimaryGeneratedColumn({ type: "int" })
    AntragID: number;

    @Column({ type: "varchar", length: 50 })
    Urlaubsart: string;

    @Column({ type: "varchar", length: 50})
    Status: string;
    @Column()
    von: Date;

    @Column()
    bis: Date;

    @Column({ type: "varchar", length: 50})
    Grund: string;

    @Column()
    informiert: boolean;

    @ManyToOne(() => Benutzer, benutzer => benutzer.anträge, { onDelete: 'CASCADE' })
    benutzer: Benutzer;



}