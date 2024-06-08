import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'src/entities/jobs.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JobsService {
    constructor(
        @InjectRepository(Job)
        private jobsRepository: Repository<Job>
    ){}
    create(job: Job): Promise<Job>{
        return this.jobsRepository.save(job)
    }
    findAll(): Promise<Job[]> {
        return this.jobsRepository.find()
    }
}
