import { z } from "zod";

export const dataSchema = z.object(
    {

    }
)

export const requestSchema = z.object(
    {
        data: dataSchema
    }
);

export const responseSchema = z.object(
    {
        status: z.boolean(),
        data: dataSchema,
        message: z.string(),
    }
);