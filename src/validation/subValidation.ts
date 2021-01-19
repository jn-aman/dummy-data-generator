/* eslint-disable @typescript-eslint/no-var-requires */
const Validator = require('fastest-validator');

const v = new Validator({
  useNewCustomCheckerFunction: true,
});


const schema = {
  type: {
    type: 'enum',
    values: [
      'word',
      'paragraph',
      'date',
      'randomNumber',
      'randomNumberOfGivenLength',
      'domainName',
      'email',
      'ipAddress',
      'name',
      'enum',
      'url',
    ],
    optional: true,
    trim: true,
  },
  length: 'number|optional|positive',
  values: {
    type: 'array',
    items: ['string', 'number'],
    min: 1,
    optional: true,
  },
};

export const subValidationSchema = v.compile(schema);
