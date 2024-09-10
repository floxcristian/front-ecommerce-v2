import { IConfig } from './config.interface';

export const config: IConfig = {
  country: 'PE',
  localeId: 'PEN',
  currencyCode: 'PEN',
  phoneCode: '+51',
  documentId: {
    customerLabel: 'DNI',
    enterpriseLabel: 'RUC',
    documentLength: 10,
    sample: '12345678-9',
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
};
