import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from '../../prisma.service';
import { LocalStrategy } from './localStrategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule],
  providers: [AuthResolver, AuthService, PrismaService, LocalStrategy],
})
export class AuthModule {}
