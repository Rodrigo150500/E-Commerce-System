import { UserEntity } from "./user_entity";
import {v7 as uuid} from "uuid"

import {expect, test} from 'vitest'

test("Should create an user entity", ()=>{

    const first_name = "Rodrigo"
    const last_name = "Takara"
    const email = "Rodrigo.takara1505@gmail.com"
    const password_hash = "abc123"
    
    const new_user = n ew UserEntity(first_name, last_name, email, password_hash)
    new_user.restore()

    expect(new_user.restore).toHaveBeenCalled()
    
})