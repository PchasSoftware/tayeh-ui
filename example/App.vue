<template>
  <section id="app" :dir="translate('cssDirection')">
    <title>Tayeh Ui Components</title>
    <img class="logo" height="100" src="../src/assets/logo.png">
    <h1>Tayeh Ui Components</h1>
    <ty-select v-model="lang">
      <ty-option v-for="l in languages" :label="l.label" :value="l.value" :key="l.value"/>
    </ty-select>
    <!-- <your-component/> -->
    <form-components :lang="lang" class="components"/>
    <font-components :lang="lang" class="components"/>
    <button-components :lang="lang" class="components"/>
    <others-components :lang="lang" class="components"/>
    <table-components :lang="lang" class="components"/>
    <layout-components :lang="lang" class="components"/>
    <upload-components :lang="lang" class="components"/>

  </section>
</template>

<script>
import Form from './Form'
import Font from './Font'
import Others from './Others.vue'
import Button from './Button.vue'
import Table from './Table.vue'
import Layout from './Layout.vue'
import Upload from './Upload.vue'
export default {
  name: 'Example',
  components: {
    'form-components': Form,
    'font-components': Font,
    'button-components': Button,
    'others-components': Others,
    'table-components': Table,
    'layout-components': Layout,
    'upload-components': Upload,
  },
  data () {
    return {
      lang: 'fa',
      languages: [
        {label: 'فارسی', value: 'fa'},
        {label: 'English', value: 'en'}
      ],
      words: {
        cssDirection: {fa: 'rtl', en: 'ltr'},
        cssAlign: {fa: 'right', en: 'left'},
        form: {fa: 'فرم', en: 'form'},
        inputs: {fa: 'ورودی‌ها', en: 'Inputs'},
        baseInput: {fa: 'ورودی ساده', en: 'Base Input'},
        currencyInput: {fa: 'ورودی پول', en: 'Currency Input'},
        editableText: {fa: 'متن قابل ویرایش', en: 'Editable Text'},
        editableNumber: {fa: 'عدد قابل ویرایش', en: 'Editable Number'},
        placeholder: {fa: 'متن جایگزین', en: 'Placeholder'}
      }
    }
  },
  methods: {
    translate(text) {
      return this.words[''+text][this.lang];
    },
  }
}
</script>

<style lang="css">
:root {
  --dodger-blue: #409eff;
  --success: #20ce66;
  --pale-grey: #f3f6f9;
  --dark: #1c1c28;
  --pastel-red: #eb5757;
  --faded-orange: #f2994a;
  --white: #ffffff;
}

@font-face {
    font-family: "iransans";
    src: url("../src/assets/fonts/irsans.ttf") format("truetype");
}
* {
      font-family: 'iransans';
      margin: 0;
      padding: 0;
      box-sizing: border-box;
}
body {
  background-color: var(--pale-grey);
}
#app {
  display: flex;
  height: 100vh;
  padding-top: 100px;
  margin-bottom: 300px;
  box-sizing: border-box;
  flex-flow: column;
  align-items: center;
  font-family: -apple-system, 'Noto Sans', 'Helvetica Neue', Helvetica, 'Nimbus Sans L', Arial,
    'Liberation Sans', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Source Han Sans SC',
    'Source Han Sans CN', 'Microsoft YaHei', 'Wenquanyi Micro Hei', 'WenQuanYi Zen Hei', 'ST Heiti',
    SimHei, 'WenQuanYi Zen Hei Sharp', sans-serif;
}
h2 {
  margin-top: 64px;
  width: 100%;
  max-width: 800px;
  border-top: 1px solid var(--dark);
}
/* h4 {
  margin-top: 64px;
  direction: ltr;
  width: 100%;
  max-width: 800px;
} */
.components {
  max-width: 100%;
  width: 800px;
  padding: 16px;
}
.component {
  margin-top: 64px;
  padding: 16px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0.5px 3px 10px 0 rgba(119, 119, 119, 0.1);
}
.example {
  overflow: auto;
  white-space: pre-line;
  position: relative;
  display: block;
  padding: 32px 16px 16px 16px;
  direction: ltr;
  background-color: #eee;
  border-radius: 4px;
  margin-bottom: 16px;
}
.example::before{
  content: 'example code';
  position: absolute;
  font-size: 0.8rem;
  color: var(--dodger-blue);
  font-weight: lighter;
  top: 8px;
}
</style>
