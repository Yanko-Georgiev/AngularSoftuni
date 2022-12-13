import { IUser } from "./user";

export interface IMovie {
    _id: string[],
    movieName: string,
    description: string,
    img:string,
    comments: string[],
    userId: IUser,
    created_at: string,
    updated_at: string,
}