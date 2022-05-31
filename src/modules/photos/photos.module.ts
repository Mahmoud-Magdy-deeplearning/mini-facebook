import { Module } from '@nestjs/common';
import { PhotosController } from './controller/photos.controller';
import { PhotosService } from './service/photos.service';
import { photosProviders } from './photos.providers';

@Module({
  controllers: [PhotosController],
  providers: [PhotosService, ...photosProviders],
})
export class PhotosModule {}
