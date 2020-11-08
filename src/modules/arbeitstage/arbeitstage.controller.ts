import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { Arbeitstage } from './arbeitstage.entity';
import { ArbeitstageService } from './arbeitstage.service';
import { CreateArbeitstage, UpdateArbeitstage } from './dto';

@Controller('arbeitstage')
export class ArbeitstageController {
    constructor(private readonly arbeitstageService: ArbeitstageService) {}

    @Post()
    async createArbeitstage(@Body() createArbeitstage: CreateArbeitstage): Promise<Arbeitstage> {
    return this.arbeitstageService.createArbeitstage(createArbeitstage);
    }

    @Get()
    async getArbeitstage(): Promise<Arbeitstage[]> {
        return this.arbeitstageService.getAllArbeitstage();
    }

    @Get(':id')
    async getArbeitstageByID(@Param('id', new ParseIntPipe()) id): Promise<Arbeitstage> {
        return this.arbeitstageService.findArbeitstageByID(id);
    }

    @Patch()
    async update(@Body() updateArbeitstage: UpdateArbeitstage) {
    return this.arbeitstageService.updateArbeitstage(updateArbeitstage);
  }

    @Delete(':id')
    async remove(@Param('id', new ParseIntPipe()) id) {
    return this.arbeitstageService.deleteArbeitstage(id);
  }
}
