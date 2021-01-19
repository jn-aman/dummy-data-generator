const consonants = "bcdfghjklmnpqrstvwxyzbpcrtpcrddrtplmnplmnbbcbcdrbnmklhgd";
const vowels = "aeiou";
function _jsUcfirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const createWord=(
  length: number,
  capitalize = false,
): string => {
  let word = "";
    let currently = "consonants";
    for (let i = 0; i < length; i++) {
      if (currently === "consonants") {
        word += consonants.substr(
          Math.floor(Math.random() * consonants.length),
          1,
        );
        currently = "vowels";
      } else {
        word += vowels.substr(
          Math.floor(Math.random() * vowels.length),
          1,
        );
        currently = "consonants";
      }
    }
  
  if (capitalize) {
    word = _jsUcfirst(word);
  }
  return word;
};
export function createParagraph(length: number): string {
  let paragraph = "";
  let capitalizeNextWord = true;
  for (let i = 0; i < length; i++) {
    paragraph += createWord(
      2 + Math.floor(Math.random() * 9),
      capitalizeNextWord,
    );
    if (Math.floor(Math.random() * 9) < 1) {
      paragraph += ". ";
      capitalizeNextWord = true;
    } else {
      paragraph += " ";
      capitalizeNextWord = false;
    }
  }
  return paragraph.trim() + ".";
}


