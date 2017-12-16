# JSON.ts <a href="https://travis-ci.org/mike-north/json.ts"  align='right'><img src="https://travis-ci.org/mike-north/json.ts.svg?branch=master"></a>
TypeScript ambient type information for compile-time validation of [JSON objects](https://www.json.org/).

## How to use this

1. Install this package
```js
npm install --save-dev json-typescript
```

2. Include this module in your `tsconfig.json`'s `typeRoots`
```json
{
  "compilerOptions": {
    "typeRoots": [
      "node_modules/@types",
      "node_modules/json-typescript"
    ]
  },
  "exclude": [
    "node_modules"
  ]
}
```

3. check to see if json types are validated correctly

```ts

// ✅ This should be OK
let doc: JSON.Value = {
  data: {
    type: 'articles',
    id: '1'
  }
};

// ⛔️ This should NOT be OK ( functions are not allowed )
let doc: JSON.Value = {
  foo() {
    return bar;
  }
};

// ⛔️ This should NOT be OK ( Array is not a JSON.Object )
let doc: JSON.Object = [];
```

## Copyright
&copy; 2017 [Mike North](https://github.com/mike-north), All Rights Reserved.
