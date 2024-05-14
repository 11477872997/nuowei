import { Controller,Post,Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreatePostDto } from "./admin.dot";
@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Post()
    setAuth(@Body() body:CreatePostDto) {
      return this.adminService.setAuth(body);
    }
}
