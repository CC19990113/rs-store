<div align="center">

  <h1><code>rs-store</code></h1>

  <strong>rs-store is a simple key-value store written in Rust <a href="https://github.com/CC19990113/rs-store">rs-store</a>.</strong>

  <p>
  </p>

  <sub>Built with 🦀🕸 by <a href="https://rustwasm.github.io/">The Rust and WebAssembly Working Group</a></sub>
</div>

## About

[**📚 Read this template tutorial! 📚**][template-docs]

This template is designed for compiling Rust libraries into WebAssembly and
publishing the resulting package to NPM.

Be sure to check out [other `wasm-pack` tutorials online][tutorials] for other
templates and usages of `wasm-pack`.

[tutorials]: https://rustwasm.github.io/docs/wasm-pack/tutorials/index.html
[template-docs]: https://rustwasm.github.io/docs/wasm-pack/tutorials/npm-browser-packages/index.html

## 🚴 Usage

### 🐑 Use `npm install rs-store` to use this package 

```bash
npm install rs-store
```

### 🛠️ Use In Your Pages
```js
import * as rsStore from 'rs-store';
const store = new rsStore.RsStore();
```
or
```js
import { RsStore } from 'rs-store';
const store = new RsStore();
```

### 🚴‍ Apis
```js
store.set('key', 'value'); // ()=> viod

store.get('key'); // ()=> value | undefined

store.remove('key'); // ()=> value | undefined

store.clear(); // ()=> void

store.keys(); // ()=> Array<string>

store.values(); // ()=> Array<any>

store.size(); // ()=> number

store.has('key'); // ()=> boolean

store.get_all(); // ()=> JSON
```