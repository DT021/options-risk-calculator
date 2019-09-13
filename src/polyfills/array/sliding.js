/* eslint-disable */

if (!Array.prototype.sliding) {
  Object.defineProperty(Array.prototype, 'sliding', {
    value: function (size) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined')
      }

      const o = Object(this)

      return o.slice(0, o.length - 1).map((elem, idx) => [elem, ...o.slice(idx + 1, idx + 1 + size)])
    },
    configurable: true,
    writable: true
  })
}
