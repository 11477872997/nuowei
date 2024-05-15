import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  setAuth(body): string {
        return 'login!';
      }
}
