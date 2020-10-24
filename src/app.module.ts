import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Arbeitstage } from './modules/arbeitstage/arbeitstage.entity';
import { Benutzer } from './modules/benutzer/benutzer.entity';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "mS!q12020",
      database: "holidaymanager",
      entities: [Arbeitstage, Benutzer],
      synchronize: true
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
