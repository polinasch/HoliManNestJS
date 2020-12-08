import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, Put } from '@nestjs/common';
import { CreateUrlaubsantrag, UpdateUrlaubsantrag } from './dto';
import { Urlaubsantrag } from './urlaubsantrag.entity';
import { UrlaubsantragService } from './urlaubsantrag.service';

@Controller('urlaubsantrag')
export class UrlaubsantragController {
    constructor(private readonly urlaubsantragService: UrlaubsantragService) {}

    @Post()
    async createUrlaubsantrag(@Body() createUrlaubsantrag: CreateUrlaubsantrag): Promise<Urlaubsantrag> {
    return this.urlaubsantragService.createAntrag(createUrlaubsantrag);
    }

    @Get()
    async getUrlaubsantraege(): Promise<Urlaubsantrag[]> {
        return this.urlaubsantragService.getAllAntraege();
    }

    @Get(':id')
    async getUrlaubsantragById(@Param('id', new ParseIntPipe()) id): Promise<Urlaubsantrag> {
        return this.urlaubsantragService.findAntragByID(id);
    }

    @Put(':id')
    updateBenutzer(@Param('id') id: number, @Body() createAntragDTO: CreateUrlaubsantrag) {
    return this.urlaubsantragService.updateAntrag(id, createAntragDTO);
    } 

    @Delete(':id')
    async remove(@Param('id', new ParseIntPipe()) id) {
    return this.urlaubsantragService.deleteAntrag(id);
  }
}