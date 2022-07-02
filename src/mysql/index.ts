import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Candidate } from '../entity/candidate.entity';
import { Vote } from '../entity/vote.entity';
import configs from '../configs';

const AppDataSource = new DataSource({
  ...(configs.mysql as any),
  synchronize: true,
  entities: [Candidate, Vote],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Mysql conectado com sucesso');
  })
  .catch((error) => {
    console.error('Falha ao connectar com MYSQL :(');
    console.error(error);
  });

export default AppDataSource;
