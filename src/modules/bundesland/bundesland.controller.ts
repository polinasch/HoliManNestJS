import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { Bundesland } from './bundesland.entity';
import { BundeslandService } from './bundesland.service';
import { CreateBundesland, UpdateBundesland } from './dto';

@Controller('bundesland')
export class BundeslandController {
    constructor(private readonly bundeslandService: BundeslandService) {}

    @Post()
    async createBundesland(@Body() createBundesland: CreateBundesland): Promise<Bundesland> {
    return this.bundeslandService.createBundesland(createBundesland);
    }

    @Get()
    async getBundesland(): Promise<Bundesland[]> {
        return this.bundeslandService.getAllBundeslaender();
    }

    @Get(':id')
    async getBundeslandByID(@Param('id', new ParseIntPipe()) id): Promise<Bundesland> {
        return this.bundeslandService.findBundeslandByID(id);
    }

    @Patch()
    async update(@Body() updateBundesland: UpdateBundesland) {
    return this.bundeslandService.updateBundesland(updateBundesland);
  }

    @Delete(':id')
    async remove(@Param('id', new ParseIntPipe()) id) {
    return this.bundeslandService.deleteBundesland(id);
  }
}