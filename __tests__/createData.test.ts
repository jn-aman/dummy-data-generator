import dataGenerator from '../src/main';

describe('createData function', () => {
  test('testing modiule array', () => {
    const columnData = {
      name: {
        type: 'word',
        length: 10,
      },
      city: {
        type: 'word',
        length: 7,
      },
      state: {
        type: 'paragraph',
        length: 2,
      },
      'about-me': {
        type: 'paragraph',
        length: 100,
      },
    };

    expect(
      dataGenerator({
        columnData,
        count: 2,
        isCSV: false,
      }).length,
    ).toBe(2);
  });

  test('testing modiule csv', () => {
    const columnData = {
      name: {
        type: 'word',
        length: 10,
      },
      city: {
        type: 'word',
        length: 7,
      },
      state: {
        type: 'paragraph',
        length: 2,
      },
      'about-me': {
        type: 'paragraph',
        length: 100,
      },
    };

    expect(
      typeof dataGenerator({
        columnData,
        count: 2,
        isCSV: true,
      }),
    ).toBe('string');
  });
});
