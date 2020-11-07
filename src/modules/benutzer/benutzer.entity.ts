import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Arbeitstage } from '../arbeitstage/arbeitstage.entity';
import { Bundesland } from '../Bundesland/bundesland.entity';
import { Urlaubsantrag } from '../antrag/urlaubsantrag.entity';

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

    @Column()
    Geburtsdatum: Date;

    @Column({ type: "varchar", length: 50})
    Email: string;

    @Column()
    Eintrittsdatum: Date;

    @ManyToOne(() => Arbeitstage, arbeitstage => arbeitstage.allebenutzer)
    arbeitstage: Arbeitstage;

    @ManyToOne(() => Bundesland, bundesland => bundesland.alleBenutzer)
    bundesland: Bundesland;

    @OneToMany(() => Urlaubsantrag, urlaubsantrag => urlaubsantrag.benutzer)
    anträge: Urlaubsantrag[];
}