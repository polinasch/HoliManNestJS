import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Benutzer } from './benutzer.entity';
import { BenutzerService } from './benutzer.service';
import { BenutzerController } from './benutzer.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Benutzer])],
    providers: [BenutzerService],
    controllers: [BenutzerController],
})
export class BenutzerModule {}