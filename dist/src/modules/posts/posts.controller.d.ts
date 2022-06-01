import { PostsService } from './posts.service';
import { Post as PostEntity } from './model/post.entity';
import { PostDto } from './dto/post.dto';
export declare class PostsController {
    private readonly postService;
    constructor(postService: PostsService);
    findAll(query: any): Promise<PostEntity[]>;
    findOne(id: number): Promise<PostEntity>;
    create(post: PostDto, req: any): Promise<PostEntity>;
}
