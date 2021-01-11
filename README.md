# tayeh-ui
[![Build Status](https://ops.pchas.ir/job/tayeh-vue-ui/badge/icon)](https://ops.pchas.ir/job/tayeh-vue-ui/)
[![NPM version](https://img.shields.io/npm/v/@tayeh/vue-components.svg?style=flat)](https://www.npmjs.org/package/@tayeh/vue-components)




  

<!-- <p align="center">

<b>

<a href="https://github.com/waynecz/Holmes">Holmes: Server boilerplate you might need</a>

|

<a href="https://github.com/waynecz/vue-img-inputer">Place other links here</a>

</b>

</p> -->

  

<br>

  

## Goals

  

- stay lightweight

- keep it simple

- be extendable

- become theme compatible

  

<br>

  

## Install and Usage

  

```bash

# installing package

npm install --save @tayeh/vue-components

```

  

#### in your Vue main.js file

  

```js

import  Vue  from  'vue';

import  App  from  './App'

import  TayehUi  from  '@tayeh/vue-components'

  

Vue.use(TayehUi)

  

new  Vue({

el: '#app',

render: h  =>  h(App)

})

  
```

  

<br>