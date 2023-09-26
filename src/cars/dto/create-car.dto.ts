import { IsString } from 'class-validator';

export class CreateCarsDto {
  @IsString({
    message: 'My rey pero  y que tu fuma maisena eh , deja de hacer loquera',
  })
  readonly brand: string;
  @IsString()
  readonly model: string;
}
