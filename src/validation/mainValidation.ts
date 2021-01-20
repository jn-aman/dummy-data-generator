/* eslint-disable @typescript-eslint/no-var-requires */
import Validator from "fastest-validator";

const v = new Validator();

const schema = {
    $$root: true,
    type: "object",
    minProps: 1
};

export const mainValidationSchema = v.compile(schema);
