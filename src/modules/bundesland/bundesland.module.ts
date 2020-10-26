import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bundesland } from './bundesland.entity';
import { BundeslandService } from './bundesland.service';
import { BundeslandController } from './bundesland.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Bundesland])],
    providers: [BundeslandService],
    controllers: [BundeslandController],
})
export class BundeslandModule {}