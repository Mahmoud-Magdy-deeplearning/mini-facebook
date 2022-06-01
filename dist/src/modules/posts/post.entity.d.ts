import { Model } from 'sequelize-typescript';
import { User } from '../users/model/user.entity';
export declare class Post extends Model<Post> {
    text: string;
    userId: number;
    user: User;
}
