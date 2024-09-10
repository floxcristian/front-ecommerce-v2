export type CountryCode = 'CL' | 'PE';

export interface IConfig {
  country: CountryCode;
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
  defaultMapCenter: google.maps.LatLngLiteral;
}
