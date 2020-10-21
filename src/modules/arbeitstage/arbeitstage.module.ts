import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Arbeitstage } from './arbeitstage.entity';
import { ArbeitstageService } from './arbeitstage.service';
import { ArbeitstageController } from './arbeitstage.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Arbeitstage])],
    providers: [ArbeitstageService],
    controllers: [ArbeitstageController],
})
export class ArbeitstageModule {}
