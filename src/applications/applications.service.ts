import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Application } from 'src/entities/application.entity';
import { Job } from 'src/entities/jobs.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApplicationsService {
    // constructor(
    //     @InjectRepository(Application)
    //     private applicationsRepository:Repository<Application>,
    //     @InjectRepository(User)
    //     private usersRepository:Repository<User>,
    //     @InjectRepository(Job)
    //     private jobsRepository:Repository<Job>
    // ){}
    // async applyToJob(userId: number, jobId: number): Promise<Application> {
    //     const user = await this .usersRepository.findOne({where: {id: userId}});
    //     const job = await this.jobsRepository.findOne({where: {id: jobId}})
    //     if(!user || !job) {
    //         throw new Error("No user or Job found")
    //     }
    //     const application = new Application()
    //     application.user = user
    //     application.job = job
    //     return this.applicationsRepository.save(application)

    // }
}
