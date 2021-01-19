/* eslint-disable @typescript-eslint/no-var-requires */
const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
    $$root: true,
    type: "object",
    minProps: 1
};

export const mainValidationSchema = v.compile(schema);
