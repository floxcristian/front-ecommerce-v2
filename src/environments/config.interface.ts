export type CountryCode = 'CL' | 'PE';

export interface IConfig {
  countryCode: CountryCode;
  localeId: string;
  currencyCode: string;
  documentId: {
    personalLabel: string;
    businessLabel: string;
    personalLength: number;
    businessLength: number;
    personalSample: string;
    businessSample: string;
  };
  tax: {
    name: string;
    value: number;
    withTaxLabel: string;
    withoutTaxLabel: string;
  };
  phone: {
    code: string;
    length: number;
  };
  administrativeDivisions: {
    fistLevelLabel: string;
    secondLevelLabel: string;
    thirdLevelLabel: string;
    localityLabel: string;
  };
  defaultMapCenter: google.maps.LatLngLiteral;
}
