# dummy-data-generator

`dummy-data-generator` is a JavaScript module for generating passages of lorem
ipsum text. It returns array of JSON object/CSV string.

`dummy-data-generator` is compatible with the browser, Node.JS, and React Native.

## Installation

```
npm i dummy-data-generator
```

## Using the Function
```
import  dataGenerator  from "dummy-data-generator";
dataGenerator({
  count: 1,                         // Number of "words" or "paragraph"
  columnData: {
      "required-column-name-one":{  // Required Column Name as string
          type:"word",              // Type of column => "word" || "paragraph"
          length:10
      },
      "required-column-name-two":{
          type:"word",
          length:10
      }
  },        
  isCSV: true,                      // if true will return output as CSV string
})
```
ColumnData Format :-
```
interface ColumnData {
  [key: string]: {
    type: string;
    length: string | number;
  };
}
infinite number of columns supported.
```
## License

Copyright (c) 2012-2020 Aman Jain <aman.j@safepath.ai> 

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.