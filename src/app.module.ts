import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { StudentModule } from './student/student.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './category/category.entity';
import { VerifyUserMiddleware } from './midelddwares/verifiy-user-midelddware';

@Module({
  imports: [
    UserModule,
    ProductModule,
    StudentModule,
    CategoryModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'proyectoquinto',
      entities: [CategoryEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerifyUserMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.POST });
  }
}
