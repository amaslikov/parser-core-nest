import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ParseCarsModule } from './parse-cars/parse-cars.module';
import { MusicsModule } from './musics/musics.module';
import { AuthModule } from './auth/auth.module';
import env = require('../env.js');
import * as ormconfig from './config/ormconfig';

export function DatabaseOrmModule(): DynamicModule {
  // we could load the configuration from dotEnv here,
  // but typeORM cli would not be able to find the configuration file.

  return TypeOrmModule.forRoot(ormconfig);
}

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [env],
    }),
    TypeOrmModule.forRoot(ormconfig),
    UsersModule,
    ParseCarsModule,
    MusicsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
