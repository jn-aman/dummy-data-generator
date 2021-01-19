import { createParagraph, createWord } from './createData';

/**
 * Returns a Promise<string> that resolves after given time.
 *
 * @param {string} name - A name.
 * @param {number=} [delay=Delays.Medium] - Number of milliseconds to delay resolution of the Promise.
 * @returns {Promise<string>}
 */

interface ColumnData {
  [key: string]: {
    type: string;
    length: string | number;
  };
}

interface ObjectData {
  [key: string]: string;
}

const getCSV = (jsonArray: ObjectData[]): string => {
  const items = jsonArray;
  const replacer = (_key:string,value: string) => (value === null ? '' : value);
  const header = Object.keys(items[0]);
  const csv = [
    header.join(','),
    ...items.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(','),
    ),
  ].join('\r\n');

  return csv;
};

const generateOneObject = (columnData: ColumnData): ObjectData => {
  const columnNames = Object.keys(columnData);
  let data = {};
  columnNames.forEach((columnName) => {
    let { type, length } = columnData[columnName];
    type = type ? type : 'word';
    length = length ? Number(length) : 5;
    if (type.trim().toLocaleLowerCase() === 'word') {
      data = { ...data, [columnName]: createWord(length) };
    } else {
      data = { ...data, [columnName]: createParagraph(length) };
    }
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
  count: number;
  isCSV: boolean;
}): string | ObjectData[] => {
  let finalData = [];
  for (let index = 0; index < count; index++) {
    finalData = [...finalData, generateOneObject(columnData)];
  }
  return isCSV ? getCSV(finalData) : finalData;
};

export default dataGenerator;
