import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { BundeslandFeiertag } from './bundesland_feiertag.entity';
import { BundeslandFeiertagService } from './bundesland_feiertag.service';
import { CreateBundeslandFeiertag, UpdateBundeslandFeiertag } from './dto';

@Controller('bundesland')
export class BundeslandFeiertagController {
    constructor(private readonly bundeslandFeiertagService: BundeslandFeiertagService) {}

    @Post()
    async createBundeslandFeiertag(@Body() createBundeslandFeiertag: CreateBundeslandFeiertag): Promise<BundeslandFeiertag> {
    return this.bundeslandFeiertagService.createBLFeiertag(createBundeslandFeiertag);
    }

    @Get()
    async getBundeslandFeiertag(): Promise<BundeslandFeiertag[]> {
        return this.bundeslandFeiertagService.getAllBLFeiertage();
    }

    @Get(':id')
    async getBundeslandFeiertagByID(@Param('id', new ParseIntPipe()) id): Promise<BundeslandFeiertag> {
        return this.bundeslandFeiertagService.findBLFeiertagByID(id);
    }

    @Patch()
    async update(@Body() updateBundeslandFeiertag: UpdateBundeslandFeiertag) {
    return this.bundeslandFeiertagService.updateBLFeiertag(updateBundeslandFeiertag);
  }

    @Delete(':id')
    async remove(@Param('id', new ParseIntPipe()) id) {
    return this.bundeslandFeiertagService.deleteBLFeiertag(id);
  }
}