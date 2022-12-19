import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  // @TrackedHasuraEventHandler({
  //   triggerName: 'user-created',
  //   tableName: 'user',
  //   definition: { type: 'insert' },
  // })
  create(data: any): Promise<User> {
    return this.prismaService.user.create({
      data,
    });
  }

  findAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  findOne(id: number): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
    // return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: any): Promise<User> {
    return this.prismaService.user.update({
      where: {
        id,
      },
      data: updateUserInput,
    });
  }

  remove(id: number): Promise<User> {
    return this.prismaService.user.delete({ where: { id } });
  }
}
