import { Photo } from './model/photo.entity';
import { PHOTO_REPOSITORY } from '../../core/constants';

export const photosProviders = [
  {
    provide: PHOTO_REPOSITORY,
    useValue: Photo,
  },
];
