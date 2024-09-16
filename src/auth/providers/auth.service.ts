import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    // Circular dependency
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {}
  public login(email: string, password: string, id: string) {
    const user = this.userService.findOneById('1234');
    return 'TOKEN';
  }

  public isAuthenticated() {
    return true;
  }
}
