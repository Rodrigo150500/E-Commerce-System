import { UserEntity } from "./user_entity";
import {v7 as uuid} from "uuid"

import {expect, test} from 'vitest'

test("Should create a user", () => {
    const user = new UserEntity(
        "Rodrigo",
        "Takara",
        "Rodrigo.takara1505@gmail.com",
        "abc123"
    );

    user.create();

    expect(user).toMatchObject({
        id: expect.any(String),
        first_name: "Rodrigo",
        last_name: "Takara",
        email: "Rodrigo.takara1505@gmail.com",
        password_hash: "abc123",
        created_at: expect.any(Date),
        updated_at: expect.any(Date),
    });
});