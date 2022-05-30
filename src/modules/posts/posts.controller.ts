import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './post.entity';
import { PostDto } from './dto/post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  async findAll(@Query() query: any) {
    // get all posts in the db
    return await this.postService.findAll(query.page, query.pageSize);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PostEntity> {
    // find the post with this id
    const post = await this.postService.findOne(id);

    // if the post doesn't exit in the db, throw a 404 error
    if (!post) {
      throw new NotFoundException("This Post doesn't exist");
    }

    // if post exist, return the post
    return post;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() post: PostDto, @Request() req): Promise<PostEntity> {
    // create a new post and return the newly created post
    return await this.postService.create(post, req.user.id);
  }
}
