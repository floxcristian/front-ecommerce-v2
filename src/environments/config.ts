import { IConfig } from './config.interface';

export const config: IConfig = {
  country: 'CL',
  localeId: 'CLP',
  currencyCode: 'CLP',
  documentId: {
    customer: 'RUT',
    enterprise: 'RUT empresa',
    documentLength: 10,
    sample: '12345678-9',
  },
  tax: {
    name: 'IVA',
    value: 0.19,
    labelWithTax: 'c/IVA',
    labelWithoutTax: 'neto',
  },
};
