# dummy-data-generator

[![Build Status](https://travis-ci.com/jn-aman/dummy-data-generator.svg?branch=main)](https://travis-ci.com/jn-aman/dummy-data-generator) [![codecov](https://codecov.io/gh/jn-aman/dummy-data-generator/branch/main/graph/badge.svg?token=VFH66277WW)](https://codecov.io/gh/jn-aman/dummy-data-generator)

`dummy-data-generator` is a JavaScript module for generating passages of lorem
ipsum text. It returns array of JSON object/CSV string.

`dummy-data-generator` is compatible with the browser, Node.JS, and React Native.

## Installation

```
npm i dummy-data-generator
          or
yarn add dummy-data-generator
```

## Using the Function

```
import  dataGenerator  from "dummy-data-generator";

                      or
      
const dataGenerator = require('dummy-data-generator').default;


dataGenerator({
  count: 1,                         // Number of "words" or "paragraph"
  columnData: {
      "required-column-name-one":{  // Required Column Name as string
          type:"word",              // Type of column => "word" || "paragraph"
          length:10
      },
      "required-column-name-two":{
          type:"word",
          length: 10
      },
      "required-column-name-two":{
          type:"enum",
          values:["high","low"]
      }
  },
  isCSV: true,                      // if true will return output as CSV string
})
```

ColumnData Format :-

```
interface ColumnData {
  [key: string]: {
    type?: string;                  // Default Value -> word
    length?: number;                // Default Value -> 5
    values?: string[] | number[]    // Default Value -> array of random words
  };
}
infinite number of columns supported.
```

## Supported Types and Required Parameters:

```
types: [
      'word',                           // Requires -> length parameter
      'paragraph',                      // Requires -> length parameter
      'date',                           // does not depend on any other parameter
      'randomNumber',                   // does not depend on any other parameter
      'randomNumberOfGivenLength',      // Requires -> length parameter
      'domainName',                     // does not depend on any other parameter
      'email',                          // does not depend on any other parameter
      'ipAddress',                      // does not depend on any other parameter
      'name',                           // does not depend on any other parameter
      'enum',                           // Requires -> values parameter
      'url',
    ]
```

## Example

1. Array of JSON Objects

```
import dataGenerator from 'dummy-data-generator'; //  const dataGenerator = require('dummy-data-generator').default;

                
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

try {
      // throws an error if required parameters are not set
      console.log(
        dataGenerator({
          columnData,
          count: 2,
          isCSV: true,
        }),
      );
    } catch (e) {
      console.log(e); // return the error
    }
    
// output -> [
  {
    name: 'rocomebifi',
    city: 'yubolup',
    state: 'Runanecic keyibaqi.',
    'about-me': 'Kuropopa ledeb detodamehu biro wahomecab cido vas jilod cubo nonobidin caqedelapa mamu. Ropimawa ducopec rixilu nuc. Suh. Hop dula rubuzirego te. Ludumobebi ru pomub meloc butitodeno lebodid. Tunubirobu nu yodonereci vat toco regebabob cuhuliqo bij wuta. Dirul kabar ne puhi ned mala pupamur hikisamuta ni. Pepajej disorap nepi pica daroge. Ra. Pa bona tit ruhofo kotal zeboradiko. Bowe bobupa mapeyib. Nocepati yosigomi ba re baxemi gape muvopicagu. Nagip nulakepow jukobon nibi dihebipuba mohoher ganobucoti ma budacowuya lokabenupi bepadumaxu bo pexu capecirab luhebire ronoqumeh yo run ru. Tumibu hibu nilip poke gevena corereri sozapalor litasi. Pu bila wodi rapi po lodotug.'
  },
  {
    name: 'nirobekuza',
    city: 'duqexin',
    state: 'Be pebelolaxo.',
    'about-me': 'Melicew lolapux wolihey xiqe cukurelagu zi nireqaneca. Lapepabiyo camenac da nepipogad paruto. Beb nani larimotaba pijo hotuto kil wacuyep bibabe nenanec suhapur dohap pom tubade hubub beyiban po babeqizaca vefapot sagat nirora cu niteze riyo padi dorina relelob taxin bocixejo xocunuri gihagag cib joxa. Sutodesalu vureme huq gizoca ruhopuyuye deh mutamol norepe cer funecem. Rucivom gas ruwe moladuciba hoyobaca. Mamumo redile. Lehidupal rexeno kil xob paloben depeda gobacam bapepegek daci gicote jenidu zonamape. Diromi. Ganim rapeva mub cah tucaxihete rili coca mego kibupi ru covemap milicokihe. Limibabel fa keba pidamupa nuz bud riherire rizazapa buciboh. Tulir tod dudoca hobeba puvuta..'
  }
]
```

2. CSV String

```
import dataGenerator from 'dummy-data-generator'; //  const dataGenerator = require('dummy-data-generator').default;
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
try {
      // throws an error if required parameters are not set
      console.log(
        dataGenerator({
          columnData,
          count: 2,
          isCSV: true,
        }),
      );
    } catch (e) {
      console.log(e); // return the error
    }

// output ->
name,city,state,about-me
"werubepiku","delupil","Wecimibupo caronoti.","Cocavu goqi qubugop vizac. Niba mine ku riburutori barocizide celureged cecutuwo cuti tulixo. Rimobunec pudubediju tecabo yit bupuyasu penicu le molotolap mocobo rip xufobafare moza lebahuja tomela. Domenodal mibexe qakol cuducu gace xadaganebu. Doradalopu wogebif nasupotiki. Nenete kibixulopu tebamiqec vomuqar. Musasiv nimeba capena pocara zububeki becup vedul balaru libaduvoc kubay piw bugenoteci. Besac qed. Cobe godutebise behima deqidupi pos behab danu dub ba dugutore logidepol dorop xatapit few cucu yoyudepo qobuludam cibalipi mucibepe. Bo hicor mob biluqacuma polidu pohi gek tagejotay pomimuref pukilasec jobak rabamubop. Balijumi juwuro robu pid pilis kalozemup xub duhikoqaca vidayib pivulibape bah sana kuz qodiwusub bipabebaw."
"bivimopabi","dovadod","Mojecelicu yurakogaro.","Melep quhowevab doropuno tijedecucu mirukeran. Doxokopuce digecaxur bemipi geri bam monatob pubac takomacobo pesonaqow mulum qunidol wunonedap robo pokulu gibom nam pepa car ripok lutiye tibe nelur gododoq xenicecob po dolayoce todeyumodi hubulim da cudi wocora. Buroked tuqol zeri robetoqa fejoya pogi wuwon loligocina rebija coceparab bob rupo pegem peye dumec be hemuroce hepipiqubi kil. Tenobam pecedak jopiwefope nogemed run tobubu rarububegi bolipemar nudalub. Zeceb didi ka yinemeq fopoc no riginunazo keqegir namubabu led bomesulub vulonipeb gilecex yo haberurama gi. Pomebabebi xifedakidu le derup famin palakif denin rapa lalatane woj. Nicuri cay. Tetefe cec cebebuf wibebuvemu lalobalido cidavu wuf cajolux."
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
