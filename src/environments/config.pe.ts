import { IConfig } from './config.interface';

export const config: IConfig = {
  country: 'PE',
  localeId: 'PEN',
  currencyCode: 'PEN',
  documentId: {
    customer: 'DNI',
    enterprise: 'RUC',
    documentLength: 10,
    sample: '12345678-9',
  },
  tax: {
    name: 'IVA',
    value: 0.18,
    labelWithTax: 'c/IVA',
    labelWithoutTax: 'neto',
  },
};
