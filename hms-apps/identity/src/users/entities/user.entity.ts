/* eslint-disable prettier/prettier */
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
//import { User } from '@common/hms-lib';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    primaryEmailAddress: string;

    @Column()
    passwordHash: string;

    @Column()
    firstName: string;

    @Column()
    lastName : string;
}
