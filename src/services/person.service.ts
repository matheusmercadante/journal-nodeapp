import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Person } from 'src/modules/person/entities/person.entity';
import { PersonRepository } from 'src/repositories/person.respoitory';
import { CreatePersonDto } from '../modules/person/dto/create-person.dto';
import { UpdatePersonDto } from '../modules/person/dto/update-person.dto';

@Injectable()
export class PersonService {
  constructor(private personRepository: PersonRepository) {}

  async create(createPersonDto: CreatePersonDto) {
    return this.personRepository.save(createPersonDto);
  }

  async findAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  async findOne(id: string): Promise<Person> {
    const person = await this.personRepository.findOne(id);

    if (!person) throw new NotFoundException('Person not found');

    return person;
  }

  async update(id: string, updatePersonDto: UpdatePersonDto): Promise<void> {
    const person = await this.personRepository.findOne(id);

    if (!person) throw new NotFoundException('Person not found');

    await this.personRepository.update(person.id, { ...updatePersonDto });
  }

  async remove(id: string): Promise<void> {
    const person = await this.personRepository.findOne(id);

    if (!person) throw new NotFoundException('Person not found');

    await this.personRepository.delete(person.id);
  }
}
