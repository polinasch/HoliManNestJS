import { Bundesland } from '../../bundesland/bundesland.entity';
import { Arbeitstage } from '../../arbeitstage/arbeitstage.entity';
import {IsString, Matches, MaxLength, MinLength} from 'class-validator';

export class CreateBenutzer {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    readonly Benutzername: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    //@Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 
    //{message: 'das Passwort ist zu schwach'})
    readonly Passwort: string;

    readonly istAdmin: boolean;
    readonly istVorgesetzter: boolean;
    readonly Vorgesetzter: string;
    readonly Vorname: string;
    readonly Nachname: string;
    readonly Geburtsdatum: Date;
    readonly Email: string;
    readonly Eintrittsdatum: Date;
    readonly arbeitstage: Arbeitstage;
    readonly bundesland: Bundesland;    
}