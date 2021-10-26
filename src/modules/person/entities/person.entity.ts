import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'persons' })
export class Person {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  lastName: string;
}
