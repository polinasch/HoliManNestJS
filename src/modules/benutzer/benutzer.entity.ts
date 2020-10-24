import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Arbeitstage } from '../arbeitstage/arbeitstage.entity';

@Entity()
export class Benutzer {
    @PrimaryGeneratedColumn({ type: "int" })
    BenutzerID: number;

    @Column({ type: "varchar", length: 50})
    Benutzername: string;

    @Column({ type: "varchar", length: 50})
    Passwort: string;

    @Column()
    istAdmin: boolean;

    @Column()
    istVorgesetzter: boolean;

    @Column({ type: "varchar", length: 50})
    Vorgesetzter: string;

    @Column({ type: "varchar", length: 50})
    Vorname: string;

    @Column({ type: "varchar", length: 50})
    Nachname: string;

    @Column({ type: "date" })
    Geburtsdatum: Date;

    @Column({ type: "varchar", length: 50})
    Email: string;

    @Column({ type: "date" })
    Eintrittsdatum: Date;

    @ManyToOne(() => Arbeitstage, arbeitstage => arbeitstage.TageID)
    arbeitstage = Arbeitstage;

}