import { Person } from 'src/modules/person/entities/person.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Person)
export class PersonRepository extends Repository<Person> {}
