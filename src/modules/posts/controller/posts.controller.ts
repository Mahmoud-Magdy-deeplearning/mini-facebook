import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UseGuards,
  Request,
  Query,
  Response,
  Res,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiConsumes, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { I18n, I18nContext } from 'nestjs-i18n';
import { PostsService } from '../service/posts.service';
import { Helper } from '../../../core/utils/multerConfig';
import { Post as PostEntity } from '../model/post.entity';
import { PostDto } from '../model/dto/post.dto';
import { PaginationQuery } from '../model/dto/pagination-query.dto';
import { languageSupport } from 'src/core/utils/language_support.dto';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async findAll(
    @Query() query: PaginationQuery,
    @Query() languageQuery: languageSupport,
    @I18n() i18n: I18nContext,
    @Res({ passthrough: true }) res: Response,
  ) {
    // get all posts in the db
    return await this.postService.findAll(
      query.page,
      query.pageSize,
      i18n,
      res,
    );
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async findOne(
    @Param('id') id: number,
    @I18n() i18n: I18nContext,
    @Res({ passthrough: true }) res: Response,
    @Query() languageQuery: languageSupport,
  ): Promise<PostEntity> {
    // find the post with this id
    return await this.postService.findOne(id, i18n, res);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: Helper.destinationPath,
        filename: Helper.customFileName,
      }),
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        text: { type: 'string' },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  // @ApiImplicitFile({ name: 'file', required: true })
  async create(
    @Body() post: PostDto,
    @Request() req,
    @I18n() i18n: I18nContext,
    @Res({ passthrough: true }) res: Response,
    @Query() languageQuery: languageSupport,
    @UploadedFile() file,
  ): Promise<PostEntity> {
    // create a new post and return the newly created post
    return await this.postService.create(
      post,
      req.user.id,
      i18n,
      res,
      file.filename,
    );
  }

  @Get('/img/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    // show the uploaded file
    return res.sendFile(image, { root: './uploads' });
  }
}
