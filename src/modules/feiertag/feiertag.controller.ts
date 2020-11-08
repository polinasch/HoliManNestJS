import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CreateFeiertag, UpdateFeiertag } from './dto';
import { Feiertag } from './feiertag.entity';
import { FeiertagService } from './feiertag.service';

@Controller('feiertag')
export class FeiertagController {
    constructor(private readonly feiertagService: FeiertagService) {}

    @Post()
    async createFeiertag(@Body() createFeiertag: CreateFeiertag): Promise<Feiertag> {
    return this.feiertagService.createFeiertag(createFeiertag);
    }

    @Get()
    async getFeiertag(): Promise<Feiertag[]> {
        return this.feiertagService.getAllFeiertage();
    }

    @Get(':id')
    async getFeiertagByID(@Param('id', new ParseIntPipe()) id): Promise<Feiertag> {
        return this.feiertagService.findFeiertagByID(id);
    }

    @Patch()
    async update(@Body() updateFeiertag: UpdateFeiertag) {
    return this.feiertagService.updateFeiertag(updateFeiertag);
  }

    @Delete(':id')
    async remove(@Param('id', new ParseIntPipe()) id) {
    return this.feiertagService.deleteFeiertag(id);
  }
}