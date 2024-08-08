export interface IConfig {
  country: string;
  localeId: string;
  currencyCode: string;
  documentId: {
    name: string;
    documentLength: number;
    sample: string;
  };
}
