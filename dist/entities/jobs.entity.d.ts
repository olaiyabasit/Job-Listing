import { Application } from "./application.entity";
export declare class Job {
    id: number;
    title: string;
    description: string;
    company: string;
    location: string;
    email: string;
    salary: number;
    applications: Application[];
}
