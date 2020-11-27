import { Controller, Get, Post, Patch, Delete, Body, Param, ParseBoolPipe, ParseIntPipe, Query } from '@nestjs/common';
import { Benutzer } from './benutzer.entity';
import { BenutzerService } from './benutzer.service';
import { CreateBenutzer, UpdateBenutzer } from './dto';

@Controller('benutzer')
export class BenutzerController {
    constructor(private readonly benutzerService: BenutzerService) {}

    @Post()
    async createBenutzer(@Body() createBenutzer: CreateBenutzer): Promise<Benutzer> {
    return this.benutzerService.createBenutzer(createBenutzer);
    }

    @Get()
    async getBenutzer(): Promise<Benutzer[]> {
        return this.benutzerService.getAllBenutzer();
    }

    @Get('/vorgesetzter')
    async getAllVorgesetzten(@Query('istVorgesetzter', new ParseBoolPipe()) istVorgesetzter: boolean): Promise<Benutzer[]>{
      return this.benutzerService.getAllVorgesetzten(istVorgesetzter);
    }

    @Get(':id')
    async getBenutzerByID(@Param('id', new ParseIntPipe()) id): Promise<Benutzer> {
        return this.benutzerService.findBenutzerByID(id);
    }

    @Patch()
    async update(@Body() updateBenutzer: UpdateBenutzer) {
    return this.benutzerService.updateBenutzer(updateBenutzer);
  }

    @Delete(':id')
    async remove(@Param('id', new ParseIntPipe()) id) {
    return this.benutzerService.deleteBenutzer(id);
  }
}