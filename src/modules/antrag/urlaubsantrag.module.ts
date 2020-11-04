import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Urlaubsantrag } from './urlaubsantrag.entity';
import { UrlaubsantragService } from './urlaubsantrag.service';
import { UrlaubsantragController } from './urlaubsantrag.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Urlaubsantrag])],
    providers: [UrlaubsantragService],
    controllers: [UrlaubsantragController],
})
export class UrlaubsantragModule {}