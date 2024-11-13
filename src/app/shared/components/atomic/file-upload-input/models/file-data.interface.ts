export interface FileData {
  name: string;
  size: number;
  type: string;
  lastModified: number;
  messageError: string | null;
  hasError: boolean;
  icon: string;
}
