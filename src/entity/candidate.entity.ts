import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Candidate {
  @PrimaryColumn()
  partyNumber: number;

  @Column()
  name: string;

  @Column()
  photo: string;
}
