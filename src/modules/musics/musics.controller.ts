import {
  Controller,
  Get,
  Res,
  Post,
  Body,
  Patch,
  Param,
  Request,
  Delete,
  UploadedFile,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { MusicsService } from './musics.service';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { createReadStream } from 'fs';

@Controller('musics')
export class MusicsController {
  constructor(private readonly musicsService: MusicsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Request() { user },
    @UploadedFile() file,
    @Body('filename') filename,
  ) {
    return this.musicsService.create({ user, file, filename });
  }

  @Get()
  findAll() {
    return this.musicsService.findAll();
  }

  @Get('file')
  async getFile(
    @Request() { user },
    @Query('filepath') filepath: string,
    @Res() res: Response,
  ) {
    const filePath = await this.musicsService.getFilePathAbs({
      user,
      filepath,
    });
    const stream = createReadStream(filePath);
    stream.pipe(res);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicsService.findOne({ id });
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
