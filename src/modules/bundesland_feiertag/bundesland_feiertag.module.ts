import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BundeslandFeiertag } from './bundesland_feiertag.entity';
import { BundeslandFeiertagService } from './bundesland_feiertag.service';
import { BundeslandFeiertagController } from './bundesland_feiertag.controller';


@Module({
    imports: [TypeOrmModule.forFeature([BundeslandFeiertag])],
    providers: [BundeslandFeiertagService],
    controllers: [BundeslandFeiertagController],
})
export class BundeslandModule {}