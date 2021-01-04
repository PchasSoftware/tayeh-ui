<template>
<div>
    <h2 id="form">{{translate('form')}}</h2>
    <section id="inputs">
      <h4>{{translate('inputs')}}</h4>

      <div class="component">
        <h6>{{translate('baseInput')}}</h6>
        <code class="example">{{examples['basicInput']}}</code>
        <ty-input type="text" label="لیبل نمونه" :placeholder="translate('placeholder')">
          <div slot="suffix">تومان</div>
          </ty-input>
          <ty-input size="small" label="اجباری" :required="true" v-model="variable" type="text" :placeholder="translate('placeholder')" icon="ty-icon-search" :border-bottom="true"/>
          <ty-input  size="large"  type="text" :placeholder="translate('placeholder')" icon="ty-icon-search" :clear="true"/>
          <ty-input :disabled="true" type="text" :placeholder="translate('placeholder')" icon="ty-icon-search" :clear="true"/>
          <ty-card>
            <form>
              <ty-input width="100%">
                <ty-button slot="button">test</ty-button>
              </ty-input>
            </form>
          </ty-card>
          <ty-input type="textarea" placeholder="متن توضیحات" icon="ty-icon-sort" v-model="variable" width="100%">
          </ty-input>
          <ty-input-number v-model="numberVariable" :step="0.5" :max="10" :min="-1"/>
          <ty-input-number v-model="numberVariable" :step="0.5" :max="10" :min="-1">
            <div slot="suffix-outside">
              درصد
            </div>
          </ty-input-number>
      </div>

      <div class="component">
        <h6>{{translate('currencyInput')}}</h6>
        <code class="example">{{examples['currencyInput']}}</code>
        <ty-currency-input v-model="currencyModel" type="text" label="لیبل نمونه" :placeholder="translate('placeholder')"><div slot="suffix">تومان</div></ty-currency-input>
        {{currencyModel}}
      </div>

      <div class="component">
        <h6>{{translate('editableText')}}</h6>
        <ty-editable-text :placeholder="translate('placeholder')"/>
      </div>

      <div class="component">
        <h6>{{translate('editableNumber')}}</h6>
        <ty-editable-number :placeholder="translate('placeholder')"/>
      </div>
    </section>

	<section id="selects">
      <h4>{{translate('selects')}}</h4>

      <div class="component">
        <h6>{{translate('basicSelect')}}</h6>
        <ty-select v-model="variable" label="لیبل" :required="true" :options="[{label: 'test', value: 'test'}, {label: 'cool', value: 'cool'}]">
          <ty-option label="تست" value="Test"/>
          <ty-option label="دومی" value="two"/>
        </ty-select>
        {{variable}}
        <ty-select :disabled="true" :options="[{label: 'test', value: 'test'}, {label: 'cool', value: 'cool'}]"/>
      </div>
    </section>
</div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    lang: {
      type: String,
      default: 'fa',
    }
  },
  data () {
    return {
      variable: 'default value',
      numberVariable: 0,
      currencyModel: 0,
      words: {
        cssDirection: {fa: 'rtl', en: 'ltr'},
        cssAlign: {fa: 'right', en: 'left'},
        form: {fa: 'فرم', en: 'form'},
        inputs: {fa: 'ورودی‌ها', en: 'Inputs'},
        baseInput: {fa: 'ورودی ساده', en: 'Base Input'},
        currencyInput: {fa: 'ورودی پول', en: 'Currency Input'},
        editableText: {fa: 'متن قابل ویرایش', en: 'Editable Text'},
        editableNumber: {fa: 'عدد قابل ویرایش', en: 'Editable Number'},
        placeholder: {fa: 'متن جایگزین', en: 'Placeholder'},
        selects: {fa: 'انتخاب', en: 'Selects'},
        basicSelect: {fa: 'انتخاب ساده', en: 'Basic Select'},
      },
      examples: {
        basicInput: '<ty-input label="لیبل نمونه" placeholder="متن جایگزین"></ty-input>',
        currencyInput: '<ty-currency-input label="لیبل نمونه" placeholder="متن جایگزین"></ty-currency-input'
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

<style scoped>
h4 {
  margin-top: 64px;
}
#inputs {
  max-width: 100%;
  width: 800px;
}
.component {
  margin-top: 8px;
  padding: 16px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0.5px 3px 10px 0 rgba(119, 119, 119, 0.1);
}
</style>
