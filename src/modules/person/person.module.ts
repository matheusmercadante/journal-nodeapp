import { Module } from '@nestjs/common';
import { PersonService } from '../../services/person.service';
import { PersonController } from './person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonRepository } from 'src/repositories/person.respoitory';

@Module({
  imports: [TypeOrmModule.forFeature([PersonRepository])],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
