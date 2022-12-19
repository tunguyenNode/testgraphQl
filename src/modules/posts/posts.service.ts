import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePostInput): Promise<Post> {
    return this.prisma.post.create({
      data,
    });
  }

  findAll(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  findOne(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        author: true,
      },
    });
  }

  update(id: number, updatePostInput: UpdatePostInput): Promise<Post> {
    const { authorId, title, published } = updatePostInput;
    return this.prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        ...(authorId && { authorId }),
        ...(title && { title }),
        ...(published && { published }),
      },
    });
  }

  remove(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
