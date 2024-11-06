export interface PurchaseOrderForm {
  code: string;
  amount: number;
  file: File | null;
  costCenterCode: string;
}
