import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    name: string;
    password: string;
    mobileNumber: string;
}
