import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUploadDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsEmail()
  @IsString()
  email: string;
}
