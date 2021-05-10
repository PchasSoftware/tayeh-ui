<template>
  <div>
    <h2 id="form">{{translate('form')}}</h2>
    <section id="inputs" class="p-2">
      <h4>{{translate('inputs')}}</h4>

      <ty-card>
        <h6>{{translate('baseInput')}}</h6>
        <code class="example">{{examples['basicInput']}}</code>
        <ty-input-number size="semi-small" v-model="numberVariable" :step="0.5" :max="10" :min="-1" :input-disabled="true">
          <div slot="suffix-outside">
            درصد
          </div>
        </ty-input-number>
        <ty-editable-text style="min-width: 200px" v-if="false" v-model="variable" />
        <ty-input-number style="width: 100%" label="width test" v-else v-model="variable" required check-mounted />
        <ty-input type="text" label="لیبل نمونه" v-model="variable" :placeholder="translate('placeholder')">
          <div slot="suffix">تومان</div>
        </ty-input>
        <ty-input checkMounted size="small" label="اجباری" :required="true" v-model="variable" type="text"
          :placeholder="translate('placeholder')" icon="ty-icon-search" :border-bottom="true" />
        <ty-input size="large" type="text" :placeholder="translate('placeholder')" icon="ty-icon-search"
          :clear="true" />
        <ty-input :disabled="true" type="text" :placeholder="translate('placeholder')" icon="ty-icon-search"
          :clear="true" />
        <ty-card>
          <form>
            <ty-input width="100%">
              <ty-button slot="button">test</ty-button>
            </ty-input>
          </form>
        </ty-card>
        <ty-input type="textarea" placeholder="متن توضیحات" icon="ty-icon-sort" v-model="variable" width="100%"/>
        <ty-input type="textarea" placeholder="متن توضیحات" icon="ty-icon-sort" v-model="variable" :resizable="false"/>
        <ty-input-number v-model="numberVariable" :step="0.5" :max="10" :min="-1" />
        <ty-input-number size="semi-small" v-model="numberVariable" :step="0.5" :max="10" :min="-1">
          <div slot="suffix-outside">
            درصد
          </div>
        </ty-input-number>

        <ty-row :gutter="10">
          <ty-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          </ty-col>
          <ty-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div>
              <ty-input-number label="سود پیشفرض" v-model="numberVariable">
                <div slot="suffix-outside" class="ty-color-primary mr-3">درصد</div>
              </ty-input-number>
            </div>
          </ty-col>
        </ty-row>
      </ty-card>

      <ty-card>
        <h6>{{translate('currencyInput')}}</h6>
        <code class="example">{{examples['currencyInput']}}</code>
        <ty-currency-input v-model="currencyModel" type="text" label="لیبل نمونه"
          :placeholder="translate('placeholder')">
          <div slot="suffix">تومان</div>
        </ty-currency-input>
        {{currencyModel}}
        <ty-currency-input v-model="currency_computed"/>
      </ty-card>

      <ty-card>
        <h6>{{translate('editableText')}}</h6>
        <ty-editable-text :placeholder="translate('placeholder')" />
      </ty-card>

      <ty-card>
        <h6>{{translate('editableNumber')}}</h6>
        <ty-editable-number :placeholder="translate('placeholder')" />
      </ty-card>
    </section>

    <section id="selects">
      <h4>{{translate('selects')}}</h4>

      <!-- <ty-card> -->
        <h6>{{translate('basicSelect')}}</h6>
        <ty-select  :show-cancel="true" v-model="variable" label="لیبل" :required="true"
          :options="[{label: 'test', value: 'test'}, {label: 'cool', value: 'cool'}]">
          <ty-option label="تست" value="Test" />
          <ty-option label="دومی" value="two" />
          <ty-option label="دومی" value="two" />
          <ty-option label="دومی" value="two" />
          <ty-option label="دومی" value="two" />
          <ty-option label="دومی" value="two" />
          <ty-option label="دومی" value="two" />
          <ty-option label="دومی" value="two" />
          <ty-option label="دومی" value="two" />
          <ty-option label="دومی" value="two" />
          <ty-option label="دومی" value="two" />
          <ty-option label="دومی" value="two" />
        </ty-select>
        {{variable}}
        <ty-select :disabled="true" :options="[{label: 'test', value: 'test'}, {label: 'cool', value: 'cool'}]" />
        <ty-select clear :lazyload="getSelectOptions" v-model="variable" :select="false" placeholder="گزینه ها" show-delete show-edit permit-create @create="handleCreate"/>
      <!-- </ty-card> -->
    </section>

    <section id="switch">
      <h4>{{translate('switch')}}</h4>
      سوییتج
      <ty-card>
        <ty-switch v-model="variable" />
        <ty-switch v-model="variable" theme="slim" />
      </ty-card>
    </section>

    <section id="checkbox">
      CheckBox
      <ty-card>
        <ty-checkbox v-model="variable" label="متن لیبل" />
        <ty-checkbox :disabled="true" v-model="variable" />
      </ty-card>
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
    data() {
      return {
        variable: 1,
        numberVariable: 0,
        currencyModel: 1000,
        words: {
          cssDirection: {
            fa: 'rtl',
            en: 'ltr'
          },
          cssAlign: {
            fa: 'right',
            en: 'left'
          },
          form: {
            fa: 'فرم',
            en: 'form'
          },
          inputs: {
            fa: 'ورودی‌ها',
            en: 'Inputs'
          },
          baseInput: {
            fa: 'ورودی ساده',
            en: 'Base Input'
          },
          currencyInput: {
            fa: 'ورودی پول',
            en: 'Currency Input'
          },
          editableText: {
            fa: 'متن قابل ویرایش',
            en: 'Editable Text'
          },
          editableNumber: {
            fa: 'عدد قابل ویرایش',
            en: 'Editable Number'
          },
          placeholder: {
            fa: 'متن جایگزین',
            en: 'Placeholder'
          },
          selects: {
            fa: 'انتخاب',
            en: 'Selects'
          },
          switch: {
            fa: 'سویتچ',
            en: 'Switch'
          },
          basicSelect: {
            fa: 'انتخاب ساده',
            en: 'Basic Select'
          },
        },
        examples: {
          basicInput: '<ty-input label="لیبل نمونه" placeholder="متن جایگزین"></ty-input>',
          currencyInput: '<ty-currency-input label="لیبل نمونه" placeholder="متن جایگزین"></ty-currency-input'
        }
      }
    },
    computed: {
      currency_computed () {
        return this.currencyModel+1000
      }
    },
    methods: {
      translate(text) {
        return this.words['' + text][this.lang];
      },
      handleCreate(e) {
        console.log('create', e);
      },
      getSelectOptions () {
        return [
          {value: 1, label: '1'}
        ]
      }
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
</style>