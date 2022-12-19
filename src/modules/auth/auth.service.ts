import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async validateUser(email: string, password: string = null) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      return user;
    }
    return null;
  }

  async login(login: LoginDto) {
    const user = await this.validateUser(login.email, login.password);
    return {
      user,
      accessToken: 'jwt token',
    };
  }

  async register(register: any) {
    return this.prismaService.user.create({ data: register });
  }
}
