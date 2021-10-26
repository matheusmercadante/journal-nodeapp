import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './modules/person/person.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://root:root@journal.clm98.mongodb.net/nodeapp',
      entities: ['dist/modules/**/entities/*.entity.js'],
      synchronize: true,
      useUnifiedTopology: true,
    }),
    PersonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
