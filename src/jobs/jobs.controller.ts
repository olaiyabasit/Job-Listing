import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from 'src/entities/jobs.entity';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}
  @Post()
  create(@Body() job: Job): Promise<Job> {
    return this.jobsService.create(job);
  }
  @Get()
  findAll(): Promise<Job[]> {
    return this.jobsService.findAll();
  }
}
