import { Bundesland } from '../../bundesland/bundesland.entity';
import { Arbeitstage } from '../../arbeitstage/arbeitstage.entity';

export class UpdateBenutzer {
    readonly BenutzerID: number;
    readonly Benutzername: string;
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