export function toArray(obj) {
  return Array.isArray(obj) ? obj : [obj];
}

export function randomString() {
  return Date.now().toString() + Math.random().toString(16).slice(2);
}

export function entriesToCss(arr) {
  if (!arr)
    return '';
  if (isString(arr))
    return arr;
  return arr
    .filter(([k, v], idx) => {
      for (let i = idx - 1; i >= 0; i--) {
        if (arr[i]?.[0] === k && arr[i]?.[1] === v)
          return false;
      }
      return true;
    })
    .map(([key, value]) => value != null ? `${key}:${value};` : undefined)
    .filter(Boolean)
    .join('');
}

// lodash
export function isObjectLike(value) {
  return typeof value === 'object' && value !== null;
}

const toString = Object.prototype.toString;

export function getTag(value) {
  if (value == null)
    return value === undefined ? '[object Undefined]' : '[object Null]';

  return toString.call(value);
}

export function isString(value) {
  const type = typeof value;
  return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getTag(value) == '[object String]');
}

export function isPlainObject(value) {
  if (!isObjectLike(value) || getTag(value) != '[object Object]')
    return false;

  if (Object.getPrototypeOf(value) === null)
    return true;

  let proto = value;
  while (Object.getPrototypeOf(proto) !== null)
    proto = Object.getPrototypeOf(proto);

  return Object.getPrototypeOf(value) === proto;
}

// https://github.com/unocss/unocss/blob/main/packages/core/src/utils/object.ts#L54C1-L75C2
export function mergeDeep(original, patch, mergeArray = false) {
  const o = original;
  const p = patch;

  if (Array.isArray(p)) {
    if (mergeArray && Array.isArray(p))
      return [...o, ...p];
    else
      return [...p];
  }

  const output = { ...o };
  if (isPlainObject(o) && isPlainObject(p)) {
    Object.keys(p).forEach((key) => {
      if (((isPlainObject(o[key]) && isPlainObject(p[key])) || (Array.isArray(o[key]) && Array.isArray(p[key]))))
        output[key] = mergeDeep(o[key], p[key], mergeArray);
      else
        Object.assign(output, { [key]: p[key] });
    });
  }
  return output;
}

/**
 * https://github.com/unocss/unocss/blob/main/packages/core/src/utils/escape.ts
 */
export function escapeSelector(str) {
  const length = str.length;
  let index = -1;
  let codeUnit;
  let result = '';
  const firstCodeUnit = str.charCodeAt(0);
  while (++index < length) {
    codeUnit = str.charCodeAt(index);
    if (codeUnit === 0x0000) {
      result += '\uFFFD';
      continue;
    }
    if (codeUnit === 44) {
      result += '\\,';
      continue;
    }
    if (
      (codeUnit >= 0x0001 && codeUnit <= 0x001F) ||
      codeUnit === 0x007F ||
      (index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
      (index === 1 && codeUnit >= 0x0030 && codeUnit <= 0x0039 && firstCodeUnit === 0x002D)
    ) {
      result += `\\${codeUnit.toString(16)} `;
      continue;
    }
    if (index === 0 && length === 1 && codeUnit === 0x002D) {
      result += `\\${str.charAt(index)}`;
      continue;
    }
    if (
      codeUnit >= 0x0080 ||
      codeUnit === 0x002D ||
      codeUnit === 0x005F ||
      (codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
      (codeUnit >= 0x0041 && codeUnit <= 0x005A) ||
      (codeUnit >= 0x0061 && codeUnit <= 0x007A)
    ) {
      result += str.charAt(index);
      continue;
    }
    result += `\\${str.charAt(index)}`;
  }
  return result;
}

export const e = escapeSelector;

// https://github.com/unocss/unocss/blob/main/packages/core/src/generator/index.ts#L747
const attributifyRe = /^\[(.+?)(~?=)"(.*)"\]$/;

// https://github.com/unocss/unocss/blob/main/packages/core/src/generator/index.ts#L749
export function toEscapedSelector(raw) {
  if (attributifyRe.test(raw))
    return raw.replace(attributifyRe, (_, n, s, i) => `[${e(n)}${s}"${e(i)}"]`);
  return `.${e(raw)}`;
}
