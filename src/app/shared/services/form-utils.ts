export function validateNoNulls<T>(data: {
  [K in keyof T]: T[K] | null;
}): data is T {
  return Object.values(data).every((value) => value !== null);
}
