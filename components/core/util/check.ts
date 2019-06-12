export function isNilObject(obj: object): Boolean {
  return Object.keys(obj).length === 0
}

// tslint:disable-next-line:no-any
export function isNil(value: any): value is null | undefined {
  return typeof value === 'undefined' || value === null
}
