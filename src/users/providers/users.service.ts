import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamDto } from '../dtos/get-user-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    // inject AuthService
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public findAll(
    getUserParamDto: GetUserParamDto,
    limit: number,
    page: number,
  ): any[] {
    const isAuthenticated = this.authService.isAuthenticated();
    console.log('isAuthenticated', isAuthenticated);
    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Jane',
        email: 'jane@doe.com',
      },
    ];
  }

  public findOneById(id: string): any {
    return {
      id: 1234,
      firstName: 'John',
      email: 'john@doe.com',
    };
  }
}
