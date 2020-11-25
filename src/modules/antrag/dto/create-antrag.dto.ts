import { Benutzer } from '../../benutzer/benutzer.entity';

export class CreateUrlaubsantrag {
    readonly Urlaubsart: string;
    readonly Status: string;
    readonly von: Date;
    readonly bis: Date;
    readonly Grund: string;
    readonly informiert: boolean;
    readonly benutzer: Benutzer;
}