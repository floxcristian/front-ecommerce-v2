import { IConfig } from './config.interface';

export const config: IConfig = {
  country: 'CL',
  localeId: 'CLP',
  currencyCode: 'CLP',
  phoneCode: '+56',
  documentId: {
    customerLabel: 'RUT',
    enterpriseLabel: 'RUT empresa',
    documentLength: 10,
    sample: '12345678-9',
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
};
