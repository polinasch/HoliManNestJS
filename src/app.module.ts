import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ArbeitstageModule } from './modules/arbeitstage/arbeitstage.module';
import { BenutzerModule } from './modules/benutzer/benutzer.module';
import { AntragModule } from './modules/antrag/antrag.module';
import { BundeslandModule } from './modules/bundesland/bundesland.module';
import { FeiertagModule } from './modules/feiertag/feiertag.module';
import { BundeslandFeiertagModule } from './modules/bundesland_feiertag/bundesland_feiertag.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ArbeitstageModule, BenutzerModule, AntragModule, BundeslandModule, FeiertagModule, BundeslandFeiertagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
