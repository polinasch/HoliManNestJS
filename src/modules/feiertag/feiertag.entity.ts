import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BundeslandFeiertag } from '../bundesland_feiertag/bundesland_feiertag.entity';
import { Transform } from 'class-transformer';

@Entity()
export class Feiertag {
    @PrimaryGeneratedColumn({ type: "int" })
    FeiertagID: number;

    @Transform(von => von.format('YYYY-MM-DD'))
    @Column()
    Datum: Date;

    @Column({ type: "varchar", length: 50 })
    Name: string;

    @Column()
    bundesweit: boolean;

    @OneToMany(() => BundeslandFeiertag, bundeslandFeiertag => bundeslandFeiertag.feiertag)
    feiertage: BundeslandFeiertag[];

}