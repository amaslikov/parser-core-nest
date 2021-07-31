import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Request,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { MusicsService } from './musics.service';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import * as fs from 'fs';
import { FileInterceptor } from '@nestjs/platform-express';
import mime = require('mime-types');
import { v4 as uuidv4 } from 'uuid';
import path = require('path');

@Controller('musics')
export class MusicsController {
  constructor(private readonly musicsService: MusicsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@Request() { user }, @UploadedFile() file) {
    function ensureDirectoryExistence(filePath) {
      const dirname = path.dirname(filePath);
      if (fs.existsSync(dirname)) {
        return true;
      }
      ensureDirectoryExistence(dirname);
      fs.mkdirSync(dirname);
    }
    const ext = mime.extension(file.mimetype);
    const fileName = `${uuidv4()}.${ext}`;
    const filepath = `./upload/${user.id}/${fileName}`;
    ensureDirectoryExistence(filepath);
    await fs.promises.writeFile(filepath, file.buffer);
    return { fileName };
  }

  @Get()
  findAll() {
    return this.musicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMusicDto: UpdateMusicDto) {
    return this.musicsService.update(+id, updateMusicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicsService.remove(+id);
  }
}
