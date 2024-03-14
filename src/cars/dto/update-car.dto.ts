import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID, IsOptional } from "class-validator";

export class UpdateCarDto {
    
    @ApiProperty()
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly brand?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly model?: string;

}