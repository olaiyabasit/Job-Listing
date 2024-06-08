import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { JobsModule } from 'src/jobs/jobs.module';
import { Application } from 'src/entities/application.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Application]), UsersModule, JobsModule],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
  exports: [ApplicationsService],
})
export class ApplicationsModule {}
