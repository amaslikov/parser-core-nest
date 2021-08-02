import { Injectable } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Music } from './entities/music.entity';
import * as fs from 'fs';
import * as path from 'path';
import mime = require('mime-types');
import { v4 as uuidv4 } from 'uuid';
import { ValidateMethod } from '../common/validation/validate.decorator';
import * as Joi from 'joi';

@Injectable()
export class MusicsService {
  constructor(
    @InjectRepository(Music)
    private musicRepository: Repository<Music>,
  ) {}

  @ValidateMethod(
    Joi.object({
      user: Joi.object({
        id: Joi.number().required(),
      }).required(),
      file: Joi.object({
        buffer: Joi.binary().required(),
        mimetype: Joi.string().required(),
      }).required(),
      filename: Joi.string().min(6).required(),
    }).options({ allowUnknown: true }),
  )
  async create({ user, file, filename }) {
    const filepath = await this.saveDisc(user, file);
    return this.musicRepository.save({
      name: filename,
      position: 0,
      path: filepath,
      created_at: new Date().toISOString(),
      updated_at: new Date(),
    });
  }

  private async saveDisc(user, file) {
    const ext = mime.extension(file.mimetype);
    const filepath = `musics/${uuidv4()}.${ext}`;
    const filepathRoot = `./upload/${user.id}/${filepath}`;
    this.ensureDirectoryExistence(filepathRoot);
    await fs.promises.writeFile(filepathRoot, file.buffer);
    return filepath;
  }

  private ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
      return true;
    }
    this.ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
  }

  findAll() {
    return this.musicRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} music`;
  }

  update(id: number, updateMusicDto: UpdateMusicDto) {
    return `This action updates a #${id} music`;
  }

  remove(id: number) {
    return `This action removes a #${id} music`;
  }
}
