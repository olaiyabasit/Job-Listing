import { Application } from "./application.entity";
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    applications: Application[];
}
