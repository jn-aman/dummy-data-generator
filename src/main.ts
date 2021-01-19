import { createParagraph, createWord } from './createData';
import { mainValidationSchema } from './validation/mainValidation';
import { subValidationSchema } from './validation/subValidation';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('faker/locale/en');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const camelCase = require('lodash/camelCase');
/**
 * Returns a Promise<string> that resolves after given time.
 *
 * @param {string} name - A name.
 * @param {number=} [delay=Delays.Medium] - Number of milliseconds to delay resolution of the Promise.
 * @returns {Promise<string>}
 */

interface ColumnData {
  [key: string]: {
    type?: string;
    length?: number;
    values?: string[];
  };
}

interface ObjectData {
  [key: string]: string;
}

const getCSV = (jsonArray: ObjectData[]): string => {
  const items = jsonArray;
  const header = Object.keys(items[0]);
  const csv = [
    header.join(','),
    ...items.map((row) =>
      header.map((fieldName) => JSON.stringify(row[fieldName])).join(','),
    ),
  ].join('\r\n');

  return csv;
};

const getDummyValue = (
  type: string,
  length: number,
  values?: string[],
): string | number | void => {
  switch (camelCase(type)) {
    case 'word': {
      return createWord(length);
    }
    case 'paragraph': {
      return createParagraph(length);
    }
    case 'name': {
      return faker.name.findName();
    }
    case 'enum': {
      const possibleValues = values
        ? values.map((el) => String(el))
        : getDummyValues(length);
      const random = Math.floor(Math.random() * possibleValues.length);
      return possibleValues[random];
    }
    case 'date': {
      return faker.date.recent().toString();
    }
    case 'randomNumber': {
      return faker.random.number();
    }
    case 'randomNumberOfGivenLength': {
      return Math.floor(Math.random() * Math.pow(10, length));
    }
    case 'url': {
      return String(faker.internet.url());
    }
    case 'domainName': {
      return String(faker.internet.domainName());
    }
    case 'email': {
      return String(faker.internet.exampleEmail());
    }
    case 'ipAddress': {
      return String(faker.internet.ip());
    }
  }
};

const getDummyValues = (length: number): string[] => {
  const arrayData = [];
  for (let index = 0; index < length; index++) {
    arrayData.push(createWord(length));
  }
  return arrayData;
};
const generateOneObject = (columnData: ColumnData): ObjectData => {
  const columnNames = Object.keys(columnData);
  let data = {};
  columnNames.forEach((columnName) => {
    let { type, length } = columnData[columnName];
    const { values } = columnData[columnName];
    type = type ? type : 'word';
    length = length ? Number(length) : 5;
    data = { ...data, [columnName]: getDummyValue(type, length, values) };
  });
  return data;
};

/**
 * Returns a Array of JSON Object of the columns provide. 
 * If @param {boolean} isCSV is set true, then it will return
 * a string in CSV format
 *
 * @param {string} columnData - A JSON Object with keys as required columns name and value with type and length of the dummy text.
 * @param {number} count - Number of Object/rows needed.
 * @param {boolean} isCSV - is CSV format needed?

 * @returns { string | ObjectData[]}
 */
const dataGenerator = ({
  columnData,
  count = 1,
  isCSV = false,
}: {
  columnData: ColumnData;
  count?: number;
  isCSV?: boolean;
}): string | ObjectData[] | Error => {
  if (mainValidationSchema(columnData) !== true) {
    return new Error(JSON.stringify(mainValidationSchema(columnData), null, 2));
  }
  let isSubValid = true;
  Object.entries(columnData).map(([, value]) => {
    if (subValidationSchema(value) !== true) {
      isSubValid = subValidationSchema(value);
    }
  });
  if (isSubValid !== true) {
    return new Error(JSON.stringify(isSubValid, null, 2));
  }

  let finalData = [];
  for (let index = 0; index < count; index++) {
    finalData = [...finalData, generateOneObject(columnData)];
  }
  return isCSV ? getCSV(finalData) : finalData;
};

export default dataGenerator;
