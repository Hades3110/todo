import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";
import {ITodo} from "../Interfaces/Interfaces";


@Entity("Todo")
export class Todo implements ITodo{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 50})
    username!:string;

    @Column({length: 50})
    email!:string;

    @Column({default: false})
    isDone!: boolean;

    @Column({length: 10000})
    content!: string;

    @CreateDateColumn({nullable: true})
    created_at!: Date;

    @Column({ type: 'timestamptz' , nullable: true})
    updated_at!: Date;
}
