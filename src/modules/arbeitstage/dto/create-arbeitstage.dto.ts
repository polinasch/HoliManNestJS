import { Benutzer } from "src/modules/benutzer/benutzer.entity";

export class CreateArbeitstage {
    readonly TageID: number;
    readonly Montag: boolean;
    readonly Dienstag: boolean;
    readonly Mittwoch: boolean;
    readonly Donnerstag: boolean;
    readonly Freitag: boolean;
    readonly Samstag: boolean;
    readonly Sonntag: boolean;
}