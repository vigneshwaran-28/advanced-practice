import {z} from 'zod';

const userSchema=z.object({
    username:z.string()
});

type User=z.infer<typeof userSchema>

const userData:User={username:"vignesh"};

console.log(userSchema.safeParse(userData));

