import {  Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Application } from "./application.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string
    @Column()
    password: string
    @OneToMany(() => Application, application =>application.user)
    applications: Application[]
}