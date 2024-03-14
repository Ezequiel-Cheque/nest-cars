// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';

import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}


export class UpdateBrandDto {

    @ApiProperty()
    @IsString()
    @MinLength(1)
    name: string;

}