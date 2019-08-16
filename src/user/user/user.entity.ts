import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column('text')
    firstName: string;

    @ApiModelProperty()
    @Column('text')
    lastName: string;

    @ApiModelProperty()
    @Column('text')
    email: string;

    @ApiModelProperty()
    @Column('text', {select: false})
    password: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
}
