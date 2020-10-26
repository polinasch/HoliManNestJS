import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BundeslandFeiertag } from '../bundesland_feiertag/bundesland_feiertag.entity';

@Entity()
export class Feiertag {
    @PrimaryGeneratedColumn({ type: "int" })
    FeiertagID: number;

    @Column()
    Datum: Date;

    @Column({ type: "varchar", length: 50 })
    Name: string;

    @Column()
    bundesweit: boolean;

    @OneToMany(() => BundeslandFeiertag, bundeslandFeiertag => bundeslandFeiertag.Feiertag)
    feiertage: BundeslandFeiertag[];

}