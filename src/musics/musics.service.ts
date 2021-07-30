import { Injectable } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Music } from './entities/music.entity';

@Injectable()
export class MusicsService {
  constructor(
    @InjectRepository(Music)
    private musicRepository: Repository<Music>,
  ) {}

  create(createMusicDto: CreateMusicDto) {
    return this.musicRepository.save({
      name: 'Dasha',
      position: 0,
      path: 'somepath.mp3',
      // created_at: new Date().toISOString(),
      // updated_at: new Date(),
    });
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
