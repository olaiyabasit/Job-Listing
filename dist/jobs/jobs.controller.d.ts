import { JobsService } from './jobs.service';
import { Job } from 'src/entities/jobs.entity';
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    create(job: Job): Promise<Job>;
    findAll(): Promise<Job[]>;
}
