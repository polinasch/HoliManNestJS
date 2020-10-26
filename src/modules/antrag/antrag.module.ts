import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Antrag } from './antrag.entity';
import { AntragService } from './antrag.service';
import { AntragController } from './antrag.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Antrag])],
    providers: [AntragService],
    controllers: [AntragController],
})
export class AntragModule {}