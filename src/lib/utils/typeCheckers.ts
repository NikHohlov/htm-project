type Keys = string | number | symbol;

export const isString = (arg: unknown): arg is string => Object.prototype.toString.call(arg) === "[object String]";

export const isNumber = (arg: unknown): arg is number => Object.prototype.toString.call(arg) === "[object Number]";

export const isNull = (arg: unknown): arg is null => Object.prototype.toString.call(arg) === "[object Null]";

export const isUndefined = (arg: unknown): arg is undefined => Object.prototype.toString.call(arg) === "[object Undefined]";

export const isObject = <T extends Record<Keys, unknown>>(obj: unknown): obj is T =>
    Object.prototype.toString.call(obj) === "[object Object]";

export const isBoolean = (arg: unknown): arg is boolean => Object.prototype.toString.call(arg) === "[object Boolean]";

export const isSymbol = (arg: unknown): arg is symbol => Object.prototype.toString.call(arg) === "[object Symbol]";

export const isFunction = (arg: unknown): arg is (...args: never[]) => unknown =>
    Object.prototype.toString.call(arg) === "[object Function]";