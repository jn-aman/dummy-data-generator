
import dataGenerator from "../src/index";

describe("createData function", () => {
  test("testing module array", () => {
    const columnData = {
      name: {
        type: "word",
        length: 10,
      },
      city: {
        type: "word",
        length: 7,
      },
      state: {
        type: "paragraph",
        length: 2,
      },
      "about-me": {
        type: "paragraph",
        length: 100,
      },
    };

    expect(
      (dataGenerator({
        columnData,
        count: 2,
        isCSV: false,
      }) as unknown[]).length,
    ).toBe(2);
  });

  test("testing module csv", () => {
    const columnData = {
      name: {
        type: "word",
        length: 10,
      },
      city: {
        type: "word",
        length: 7,
      },
      state: {
        type: "paragraph",
        length: 2,
      },
      "about-me": {
        type: "paragraph",
        length: 100,
      },
    };

    expect(
      typeof dataGenerator({
        columnData,
        count: 2,
        isCSV: true,
      }),
    ).toBe("string");
  });

  test("testing module count and array", () => {
    const columnData = {
      name: {
        type: "word",
        length: 10,
      },
      city: {
        type: "word",
        length: 7,
      },
      state: {
        type: "paragraph",
        length: 2,
      },
      "about-me": {
        type: "paragraph",
        length: 100,
      },
      cisty: {
        type: "enum",
        length: 2,
        values: ["sdf", "asd"],
      },
    };

    expect(
      typeof dataGenerator({
        columnData,
      }),
    ).toBe("object");
  });

  test("testing module count and isCSV", () => {
    const columnData = {
      name: {
        type: "word",
        length: 10,
      },
      city: {
        type: "word",
        length: 7,
      },
      state: {
        type: "paragraph",
        length: 2,
      },
      "about-me": {
        type: "paragraph",
        length: 100,
      },
    };

    expect(
      typeof dataGenerator({
        columnData,
        isCSV: true,
      }),
    ).toBe("string");
  });

  test("testing module missing data", () => {
    const columnData = {};

    try {
      expect(() =>
        dataGenerator({
          columnData,
          isCSV: true,
        }),
      ).toThrow();
    } catch (e) {
      expect(typeof e === "object");
    }
  });

  test("testing module missing sub data", () => {
    try {
      expect(() =>
        dataGenerator({
          columnData: {
            name: {},
            city: {
              type: "sdf",
              length: 7,
            },
          },
          isCSV: true,
        }),
      ).toThrow();
    } catch (e) {
      expect(typeof e === "object");
    }
  });

  test("testing module missing type and length", () => {
    const columnData = {
      name: {},
      city: {
        type: "word",
        length: 7,
      },
      state: {
        type: "paragraph",
        length: 2,
      },
      "about-me": {
        type: "paragraph",
        length: 100,
      },
      nadme: {
        type: "name",
        length: 100,
      },
      enum: {
        type: "enum",
        length: 100,
        value: ["asd"],
      },
      date: {
        type: "date",
        length: 100,
      },
      randomNumber: {
        type: "randomNumber",
        length: 10,
      },
      randomNumberOfGivenLength: {
        type: "randomNumberOfGivenLength",
        length: 10,
      },
      url: {
        type: "url",
        length: 10,
      },
      email: {
        type: "email",
        length: 10,
      },
      domainName: {
        type: "domainName",
        length: 10,
      },
      ipAddress: {
        type: "ipAddress",
        length: 10,
      },
    };

    expect(
      typeof dataGenerator({
        columnData,
        isCSV: true,
      }),
    ).toBe("string");
  });
});
