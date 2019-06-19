import { coerceBooleanProperty } from '@angular/cdk/coercion'

export function toBoolean(value: boolean | string): boolean {
  return coerceBooleanProperty(value)
}

// tslint:disable-next-line: no-any
function propDecoratorFactory<T, D>(name: string, fallback: (v: T) => D): (target: any, propName: string) => void {
  // tslint:disable-next-line: no-any
  return function(target: any, propName: string): void {
    const privatePropName = `$$__${propName}`

    if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
      console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`)
    }

    Object.defineProperty(target, privatePropName, {
      configurable: true,
      writable: true
    })

    Object.defineProperty(target, propName, {
      get(): string {
        return this[privatePropName] // tslint:disable-line:no-invalid-this
      },
      set(value: T): void {
        this[privatePropName] = fallback(value) // tslint:disable-line:no-invalid-this
      }
    })
  }
}

// tslint:disable-next-line: no-any
export function InputBoolean(): any {
  return propDecoratorFactory('InputBoolean', toBoolean)
}
