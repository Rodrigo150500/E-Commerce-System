import {v7 as uuidv7, } from "uuid"

export class UserEntity{

    id: string | undefined
    first_name: string
    last_name: string
    email: string
    password_hash: string
    created_at: Date | undefined
    updated_at: Date | undefined

    constructor(
        first_name: string, 
        last_name: string, 
        email: string, 
        password_hash: string 
     ){
        this.first_name = first_name,
        this.last_name = last_name,
        this.email = email,
        this.password_hash = password_hash,

        this.validate()
    }

    create(){
        this.id = uuidv7()
        this.created_at = new Date()
        this.updated_at = new Date()
    }

    restore(
        id: string, 
        first_name: string, 
        last_name: string, 
        email: string, 
        created_at: Date, 
        updated_at: Date){
        return {
            id, 
            first_name, 
            last_name, 
            email, 
            created_at, 
            updated_at
        }
    }

    private validate(){

        this.validate_name()
        this.validate_email()        
    }

    private validate_name(){
        if(this.first_name.length <= 2 || this.last_name.length <= 2){
            throw new Error("The name must be at least 2 caracters")
        }
    }

    private validate_email(){
        const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        
        const result = expression.test(this.email)

        if(result != true){
            throw new Error("E-mail is incorrect")
        }
    }
}