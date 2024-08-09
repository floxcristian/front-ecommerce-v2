export interface IConfig {
  country: string;
  localeId: string;
  currencyCode: string;
  documentId: {
    customer: string;
    enterprise: string;
    documentLength: number;
    sample: string;
  };
}
