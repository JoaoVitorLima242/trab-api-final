import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

const rootOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'postgres',
  autoLoadEntities: true,
  synchronize: true,
};
@Module({
  imports: [CoursesModule, TypeOrmModule.forRoot(rootOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
