export interface IConfig {
  country: string;
  localeId: string;
  currencyCode: string;
  phoneCode: string;
  documentId: {
    customerLabel: string;
    enterpriseLabel: string;
    documentLength: number;
    sample: string;
  };
  tax: {
    name: string;
    value: number;
    withTaxLabel: string;
    withoutTaxLabel: string;
  };
}
