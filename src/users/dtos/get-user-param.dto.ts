import { IsInt, IsOptional, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class GetUserParamDto {
  @IsInt()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  id?: number;
}
