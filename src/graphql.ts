
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}

export class LoginInput {
    email: string;
}

export class RegisterInput {
    email: string;
    name: string;
    role: string;
}

export class CreatePostInput {
    title: string;
    published: boolean;
    authorId: number;
}

export class UpdatePostInput {
    id: string;
    title: string;
    published: boolean;
    authorId: number;
}

export class CreateUserInput {
    email: string;
    name: string;
    role: Role;
}

export class UpdateUserInput {
    id: number;
    name: string;
    role: Role;
}

export class LoginResponse {
    user: User;
    accessToken?: Nullable<string>;
}

export abstract class IMutation {
    abstract login(loginInput: LoginInput): LoginResponse | Promise<LoginResponse>;

    abstract register(registerInput: RegisterInput): LoginResponse | Promise<LoginResponse>;

    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;

    abstract removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Post {
    id: number;
    createdAt: string;
    updatedAt: string;
    published: boolean;
    title: string;
    authorId: number;
    author: User;
}

export abstract class IQuery {
    abstract posts(): Post[] | Promise<Post[]>;

    abstract post(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    email: string;
    name: string;
    role: string;
    createdAt: string;
}

type Nullable<T> = T | null;
