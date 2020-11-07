import { Bundesland } from '../../bundesland/bundesland.entity';
import { Feiertag } from '../../feiertag/feiertag.entity';

export class UpdateBundeslandFeiertag {
    readonly BLFeiertagID: number;
    readonly Feiertag: number;
    readonly Bundesland: number;
    readonly bundesland = Bundesland;
    readonly feiertag = Feiertag;
}