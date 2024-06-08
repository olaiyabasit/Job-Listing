import { Job } from 'src/entities/jobs.entity';
import { Repository } from 'typeorm';
export declare class JobsService {
    private jobsRepository;
    constructor(jobsRepository: Repository<Job>);
    create(job: Job): Promise<Job>;
    findAll(): Promise<Job[]>;
}
