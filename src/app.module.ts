import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { ApplicationsModule } from './applications/applications.module';
import { UsersModule } from './users/users.module';
import { Job } from './entities/jobs.entity';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './entities/application.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type:"sqlite",
        database: "db",
        entities: [Job, User, Application],
        synchronize: true
      }
    ),
    JobsModule, ApplicationsModule, UsersModule
  ],
})
export class AppModule {}
