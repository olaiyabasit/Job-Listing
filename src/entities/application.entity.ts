import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Job } from './jobs.entity';

@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.applications)
  user: User;
  @ManyToOne(() => Job, (job) => job.applications)
  job: Job;
}
