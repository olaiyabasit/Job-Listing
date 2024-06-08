import {  Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Application } from "./application.entity";
import { application } from "express";

@Entity()
export class Job {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    company: string
    @Column()
    location: string
    @Column()
    email: string
    @Column()
    salary: number
    @OneToMany(() => Application, application =>application.job)
    applications: Application[]
}