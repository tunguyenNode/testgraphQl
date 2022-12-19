import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './gqlAuthGuard';
import { LoginDto } from './dto/login.dto';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('login')
  @UseGuards(GqlAuthGuard)
  login(@Args('loginInput') loginInput: LoginDto) {
    throw new UnauthorizedException();
    // console.log(loginInput);
    // return this.authService.login(loginInput);
  }

  @Mutation('register')
  register(@Args('register') register: any) {
    return this.authService.register(register);
  }
}
