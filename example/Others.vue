<template>
<div>
    <h2 id="form">{{translate('others')}}</h2>
    <section id="icons">
      <h4>{{translate('card')}}</h4>
      <ty-card dir="ltr">
        <code class="example">{{examples['card']}}</code>
        <ty-card>
          <div slot="header">Header</div>
          Main Content 
          <div slot="footer">Footer</div>
        </ty-card>
      </ty-card>
    </section>

    <section id="border">
      <h4>{{translate('border')}}</h4>
      <ty-card>
        <code class="example">{{examples['border']}}</code>
        <ty-border icon="ty-icon-sort">
          <div slot="label">
            تعداد کاربران امروز
          </div>
          0 نفر
        </ty-border>
        <ty-row :gutter="10">
          <ty-col :md="6">
            <ty-border width="100%" icon="ty-icon-sort">
              <div slot="label">
                تعداد کاربران امروز 
              </div>
              0 نفر
            </ty-border>
          </ty-col>
          <ty-col :md="6">
            <ty-border width="100%" icon="ty-icon-sort">
              <div slot="label">
                تعداد کاربران امروز 
              </div>
              0 نفر
            </ty-border>
          </ty-col>
          <ty-col :md="6">
            <ty-border width="100%" icon="ty-icon-sort">
              <div slot="label">
                تعداد کاربران امروز 
              </div>
              0 نفر
            </ty-border>
          </ty-col>
        </ty-row>
        <ty-border width="100%" icon="ty-icon-sort">
          <div slot="label">
            تعداد کاربران امروز 
          </div>
          0 نفر
        </ty-border>
      </ty-card>
    </section>

    <section id="acardion">
      <h4>{{translate('acardion')}}</h4>
      <ty-card>
        <code class="example">{{examples['acardion']}}</code>
        <ty-acardion icon="ty-icon-sort" open="1">
          <ty-acardion-item :show-borders="true" index="1" label="انبار شماره ۱" class="fw-lighter">
            موجودی انبار
          </ty-acardion-item>
          <ty-acardion-item index="2" label="انبار شماره ۲">
            موجودی انبار ۲
          </ty-acardion-item>
        </ty-acardion>
      </ty-card>
    </section>

    <section id="text">
      <h4>{{translate('text')}}</h4>
      <ty-card>
        <code class="example">{{examples['acardion']}}</code>
        <ty-acardion icon="ty-icon-sort" open="1">
          <p class="of-text-ellipsis break-word" style="max-width: 32px">
            موجودی انبار
          </p>
          <p class="ty-opacity-50">
            موجودی انبار
          </p>
        </ty-acardion>
      </ty-card>
    </section>

    <section id="modal">
      <h4>{{translate('modal')}}</h4>
      <ty-card>
        <code class="example">{{examples['acardion']}}</code>
        <ty-button @click="dialogVisible = true">click to open the Dialog</ty-button>

        <ty-modal
          title="Tips"
          :visible="dialogVisible">
          <span> This is a messaasdfa sdfasdf
           <ty-select v-model="variable" label="لیبل" :required="true" :options="[{label: 'test', value: 'test'}, {label: 'cool', value: 'cool'}]">
          <ty-option label="تست" value="Test"/>
          <ty-option label="دومی" value="two"/>
        </ty-select>
        <ty-color-circle v-model="color" editable/>temp text</span>
          <span slot="footer" class="dialog-footer">
            <ty-button @click="dialogVisible = false">Cancel</ty-button>
          </span>
          <ty-button @click="sub_modal_visible = true">show</ty-button>
        <ty-modal :visible.sync="sub_modal_visible">
        </ty-modal>
        </ty-modal>
      </ty-card>
    </section>
    <section id="loading">
      <h4>{{translate('loading')}}</h4>
      <ty-card>
        <code class="example">{{examples['loading']}}</code>
        <ty-button v-loading="true" @click="dialogVisible = true">click to open the Dialog</ty-button>  
      </ty-card>
    </section>
    <section id="currency-filter">
      <ty-card>
        {{123456|currency}}
        {{'asdfqwersd'|currency}}
      </ty-card>
    </section>

    <section id="color-picker">
      <ty-card>
        <ty-color-picker v-model="color"/>
        {{color}}
      </ty-card>
    </section>

    <section id="color-circle">
      <ty-card>
        <ty-color-circle v-model="color" :editable="true"/>
        {{color}}
      </ty-card>
    </section>
    <div class="ty-flex ty-gap-24">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    lang: {
      type: String,
      default: 'fa',
    }
  },
  data () {
    return {
      dialogVisible: false,
      variable: null,
      sub_modal_visible: false,
      color: '#129',
      words: {
        cssDirection: {fa: 'rtl', en: 'ltr'},
        cssAlign: {fa: 'right', en: 'left'},
        others: {fa: 'غیره', en: 'Others'},
        card: {fa: 'کارت', en: 'Card'},
        border: {fa: 'بردر', en: 'Border'},
        acardion: {fa: 'آکاردیون', en: 'Acardion'},
        baseInput: {fa: 'ورودی ساده', en: 'Base Input'},
        currencyInput: {fa: 'ورودی پول', en: 'Currency Input'},
        editableText: {fa: 'متن قابل ویرایش', en: 'Editable Text'},
        text: {fa: 'متن', en: 'Text'},
      },
      icons: [
        'ty-icon-arrow-drop-down',
        'ty-icon-arrow-right',
        'ty-icon-cart',
        'ty-icon-chart',
        'ty-icon-delete',
        'ty-icon-edit',
        'ty-icon-exit',
        'ty-icon-inventory',
        'ty-icon-notifications',
        'ty-icon-package',
        'ty-icon-search',
        'ty-icon-setting',
        'ty-icon-sort',
        'ty-icon-smile'
      ],
      examples: {
        card: '<ty-card> Simple Card </ty-card>',
        border: '<ty-border> 0 نفر </ty-border>',
        acardion: '<ty-acardion> <ty-acardion label="عنوان اول">متن اولین آکاردیون</ty-acardion> </ty-acardion>',
        acardion: '<p class="of-text-ellipsis">یک متن طولانی</p>',
      }
    }
  },
  methods: {
    translate(text) {
      return this.words[''+text]?this.words[''+text][this.lang]:text;
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
.grid {
  display: grid;
  grid-template-columns: auto auto auto;
}
.designer {
  border-top: 1px solid #eee;
  color: #333;
  font-size: 14px;
  margin-top: 16px;
}
@media (max-width: 800px) {
  .grid {
    grid-template-columns: auto auto;
  }
}
@media (max-width: 500px) {
  .grid {
    display: block;
    gap: 10px;
  }
}
</style>
