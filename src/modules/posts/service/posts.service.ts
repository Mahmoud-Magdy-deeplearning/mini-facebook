import {
  Injectable,
  Inject,
  HttpStatus,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';

import { Post } from '../model/post.entity';
import { PostDto } from '../model/dto/post.dto';
import { User } from '../../users/model/user.entity';
import { POST_REPOSITORY } from '../../../core/constants';

@Injectable()
export class PostsService {
  constructor(
    @Inject(POST_REPOSITORY) private readonly postRepository: typeof Post,
  ) {}

  async create(post: PostDto, userId, i18n, res): Promise<Post> {
    try {
      await this.postRepository.create<Post>({ ...post, userId });
      const msg = await i18n.t('test.POST_SUCCESS');
      return res.status(HttpStatus.CREATED).send({
        status: HttpStatus.CREATED,
        message: msg,
      });
    } catch (err) {
      const msg = await i18n.t('test.POST_FAIL');
      throw new BadRequestException(msg);
    }
  }

  async findAll(page = 1, pageSize = 5, i18n, res): Promise<Post[]> {
    try {
      const posts = await this.postRepository.findAll<Post>({
        attributes: { exclude: ['userId'] },
        limit: pageSize,
        offset: (page - 1) * pageSize,
      });
      const msg = await i18n.t('test.GET_POSTS_SUCCESS');
      return res.status(HttpStatus.CREATED).send({
        status: HttpStatus.CREATED,
        message: msg,
        posts,
      });
    } catch (err) {
      const msg = await i18n.t('test.GET_POSTS_FAIL');
      throw new BadRequestException(msg);
    }
  }

  async findOne(id, i18n, res): Promise<Post> {
    try {
      const post = await this.postRepository.findOne({
        where: { id },
        include: [{ model: User, attributes: { exclude: ['password'] } }],
      });
      const msg = await i18n.t('test.GET_POSTS_SUCCESS');
      return res.status(HttpStatus.CREATED).send({
        status: HttpStatus.CREATED,
        message: msg,
        post,
      });
    } catch (err) {
      const msg = await i18n.t('test.GET_POSTS_FAIL');
      throw new BadRequestException(msg);
    }
  }
}