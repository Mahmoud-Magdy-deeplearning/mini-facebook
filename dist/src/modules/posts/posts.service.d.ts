import { Post } from './model/post.entity';
import { PostDto } from './dto/post.dto';
export declare class PostsService {
    private readonly postRepository;
    constructor(postRepository: typeof Post);
    create(post: PostDto, userId: any): Promise<Post>;
    findAll(page?: number, pageSize?: number): Promise<Post[]>;
    findOne(id: any): Promise<Post>;
}
