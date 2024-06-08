import { Controller, Param, Post } from '@nestjs/common';
import { ApplicationsService } from './applications.service';

@Controller('applications')
export class ApplicationsController {
    constructor(private readonly applicationservice: ApplicationsService){}
    // @Post(':userId/apply/:jobId')
    // async applyToJob(@Param("userId") userId: number, @Param("jobId") jobId: number){
    //     return this.applicationservice.applyToJob(userId, jobId)
    // }
}
