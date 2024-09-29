import { IConfig } from './config.interface';

export const config: IConfig = {
  countryCode: 'CL',
  localeId: 'CLP',
  currencyCode: 'CLP',
  documentId: {
    personalLabel: 'RUT',
    businessLabel: 'RUT empresa',
    personalLength: 10,
    businessLength: 10,
    personalSample: '12345678-9',
    businessSample: '12345678-9',
  },
  tax: {
    name: 'IVA',
    value: 0.19,
    withTaxLabel: 'c/IVA',
    withoutTaxLabel: 'neto',
  },
  defaultMapCenter: {
    lat: -36.79975467819392,
    lng: -71.49897587245773,
  },
  phone: {
    code: '+56',
    length: 9,
  },
  administrativeDivisions: {
    fistLevelLabel: 'Región',
    secondLevelLabel: 'Provincia',
    thirdLevelLabel: 'Comuna',
    localityLabel: 'Localidad',
  },
};
