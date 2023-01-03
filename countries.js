const regionsList = {
  af: 'Africa',
  as: 'Asia',
  eu: 'Europe',
  na: 'North America',
  oc: 'Oceania',
  sa: 'South America',
};

const languagesList = {
  ara: 'Arabic',
  aym: 'Aymara',
  hrv: 'Croatian',
  deu: 'German',
  eng: 'English',
  fra: 'French',
  grn: 'Guaran\u00ed',
  hun: 'Hungarian',
  ita: 'Italian',
  jpn: 'Japanese',
  kor: 'Korean',
  cmn: 'Mandarin',
  mri: 'M\u0101ori',
  nzs: 'New Zealand Sign Language',
  por: 'Portuguese',
  que: 'Quechua',
  roh: 'Romansh',
  spa: 'Spanish',
  tur: 'Turkish',
  ukr: 'Ukrainian',
}

const countriesList = [
  {
    name: 'Ukraine', capital: 'Kyiv', region: regionsList.eu,
    flagPic: 'https://img.icons8.com/office/512/ukraine.png',
    languages: [languagesList.ukr],
  },
  {
    name: 'Austria', capital: 'Vienna', region: regionsList.eu,
    flagPic: 'https://img.icons8.com/office/512/austria.png',
    languages: [languagesList.deu],
  },
  {
    name: 'United Kingdom', capital: 'London', region: regionsList.eu,
    flagPic: 'https://img.icons8.com/office/512/great-britain.png',
    languages: [languagesList.eng],
  },
  {
    name: 'Hungary', capital: 'Budapest', region: regionsList.eu,
    flagPic: 'https://img.icons8.com/office/512/hungary.png',
    languages: [languagesList.hun],
  },
  {
    name: 'Switzerland', capital: 'Bern', region: regionsList.eu,
    flagPic: 'https://img.icons8.com/office/512/switzerland.png',
    languages: [languagesList.deu, languagesList.fra, languagesList.ita, languagesList.roh],
  },
  {
    name: 'France', capital: 'Paris', region: regionsList.eu,
    flagPic: 'https://img.icons8.com/office/512/france.png',
    languages: [languagesList.fra],
  },
  {
    name: 'United States', capital: 'Washington D.C.', region: regionsList.na,
    flagPic: 'https://img.icons8.com/office/512/usa.png',
    languages: [languagesList.eng],
  },
  {
    name: 'Croatia', capital: 'Zagreb', region: regionsList.eu,
    flagPic: 'https://img.icons8.com/office/512/croatia--v2.png',
    languages: [languagesList.hrv],
  },
  {
    name: 'Portuguese Republic', capital: 'Lisbon', region: regionsList.eu,
    flagPic: 'https://img.icons8.com/office/512/portugal.png',
    languages: [languagesList.por],
  },
  {
    name: 'Mexico', capital: 'Mexico City', region: regionsList.na,
    flagPic: 'https://img.icons8.com/office/512/mexico--v2.png',
    languages: [languagesList.spa],
  },
  {
    name: 'Canada', capital: 'Ottawa', region: regionsList.na,
    flagPic: 'https://img.icons8.com/office/512/canada.png',
    languages: [languagesList.eng, languagesList.fra],
  },
  {
    name: 'Argentina', capital: 'Buenos Aires', region: regionsList.sa,
    flagPic: 'https://img.icons8.com/office/512/argentina.png',
    languages: [languagesList.grn, languagesList.spa],
  },
  {
    name: 'Brazil', capital: 'Bras\u00edlia', region: regionsList.sa,
    flagPic: 'https://img.icons8.com/office/512/brazil.png',
    languages: [languagesList.por],
  },
  {
    name: 'Bolivia', capital: 'Sucre', region: regionsList.sa,
    flagPic: 'https://img.icons8.com/office/512/bolivia.png',
    languages: [languagesList.aym, languagesList.grn, languagesList.que, languagesList.spa],
  },
  {
    name: 'Paraguay', capital: 'Asunci\u00f3n', region: regionsList.sa,
    flagPic: 'https://img.icons8.com/office/512/paraguay.png',
    languages: [languagesList.grn, languagesList.spa],
  },
  {
    name: 'Italian Republic', capital: 'Rome', region: regionsList.eu,
    flagPic: 'https://img.icons8.com/office/512/italy.png',
    languages: [languagesList.ita],
  },
  {
    name: 'Turkey', capital: 'Ankara', region: regionsList.as,
    flagPic: 'https://img.icons8.com/office/512/turkey.png',
    languages: [languagesList.tur],
  },
  {
    name: 'Egypt', capital: 'Cairo', region: regionsList.af,
    flagPic: 'https://img.icons8.com/office/512/egypt.png',
    languages: [languagesList.ara],
  },
  {
    name: 'Tunisia', capital: 'Tunis', region: regionsList.af,
    flagPic: 'https://img.icons8.com/office/512/tunisia.png',
    languages: [languagesList.ara],
  },
  {
    name: 'Saudi Arabia', capital: 'Riyadh', region: regionsList.as,
    flagPic: 'https://img.icons8.com/office/512/saudi-arabia.png',
    languages: [languagesList.ara],
  },
  {
    name: 'Algeria', capital: 'Algiers', region: regionsList.af,
    flagPic: 'https://img.icons8.com/office/512/algeria.png',
    languages: [languagesList.ara],
  },
  {
    name: 'Australia', capital: 'Canberra', region: regionsList.oc,
    flagPic: 'https://img.icons8.com/office/512/australia-flag.png',
    languages: [languagesList.eng],
  },
  {
    name: 'New Zealand', capital: 'Wellington', region: regionsList.oc,
    flagPic: 'https://img.icons8.com/office/512/new-zealand.png',
    languages: [languagesList.eng, languagesList.mri, languagesList.nzs],
  },
  {
    name: 'Germany', capital: 'Berlin', region: regionsList.eu,
    flagPic: 'https://img.icons8.com/office/512/germany.png',
    languages: [languagesList.deu],
  },
  {
    name: 'China', capital: 'Beijing', region: regionsList.as,
    flagPic: 'https://img.icons8.com/office/512/china.png',
    languages: [languagesList.cmn],
  },
  {
    name: 'Japan', capital: 'Tokyo', region: regionsList.as,
    flagPic: 'https://img.icons8.com/office/512/japan.png',
    languages: [languagesList.jpn],
  },
  {
    name: 'South Korea', capital: 'Seoul', region: regionsList.as,
    flagPic: 'https://img.icons8.com/office/512/south-korea.png',
    languages: [languagesList.kor],
  },
];

let getRegionsList = Object.values(regionsList);
let getLanguagesList = Object.values(languagesList);
