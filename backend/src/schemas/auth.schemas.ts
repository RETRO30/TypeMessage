import { z } from 'zod';
import { requestSchema, responseSchema, dataSchema } from './base.schmas';


export const registerRequestScheme = requestSchema.extend(
    {
        data: dataSchema.extend(
            {
                name: z.string(),
                email: z.string().email({ message: 'Invalid email'}),
                password: z.string().min(8, {message: 'Password minimum length - 8 symbols'})
            }
        )
    }
);

const tokenDataScheme = dataSchema.extend(
    {
        token: z.string()
    }
);

export const registerResponseScheme = responseSchema.extend(
    {
        data: tokenDataScheme
    }
);

export const loginRequestScheme = requestSchema.extend(
    {
        data: dataSchema.extend(
            {
                email: z.string().email({ message: "Invalid email" }),
                password: z.string().min(1, {message: 'Password required'})
            }
        )
    }
)

export const loginResponseScheme = responseSchema.extend(
    {
        data: tokenDataScheme
    }
)