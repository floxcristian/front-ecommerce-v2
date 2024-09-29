import { IConfig } from './config.interface';

export const config: IConfig = {
  countryCode: 'PE',
  localeId: 'PEN',
  currencyCode: 'PEN',
  documentId: {
    personalLabel: 'DNI',
    businessLabel: 'RUC',
    personalLength: 8,
    businessLength: 11,
    personalSample: '41111111',
    businessSample: '20123456789',
  },
  tax: {
    name: 'IGV',
    value: 0.18,
    withTaxLabel: 'c/IGV',
    withoutTaxLabel: 'neto',
  },
  defaultMapCenter: {
    lat: -12.046559,
    lng: -77.10272,
  },
  phone: {
    code: '+51',
    length: 9,
  },
  administrativeDivisions: {
    fistLevelLabel: 'Departamento',
    secondLevelLabel: '-',
    thirdLevelLabel: 'Provincia',
    localityLabel: 'Distrito',
  },
};
