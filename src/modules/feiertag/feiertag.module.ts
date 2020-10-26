import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feiertag } from './feiertag.entity';
import { FeiertagService } from './feiertag.service';
import { FeiertagController } from './feiertag.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Feiertag])],
    providers: [FeiertagService],
    controllers: [FeiertagController],
})
export class FeiertagModule {}