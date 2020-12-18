<template>
<div>
    <h2 id="form">{{translate('others')}}</h2>
    <section id="icons">
      <h4>{{translate('card')}}</h4>
      <div class="component" dir="ltr">
        <code class="example">{{examples['card']}}</code>
        <ty-card>
          <div slot="header">Header</div>
          Main Content 
          <div slot="footer">Footer</div>
        </ty-card>
      </div>
    </section>

    <section id="icons">
      <h4>{{translate('border')}}</h4>
      <div class="component">
        <code class="example">{{examples['border']}}</code>
        <ty-border icon="ty-icon-sort">
          <div slot="label">
            تعداد کاربران امروز
          </div>
          0 نفر
        </ty-border>
      </div>
    </section>
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
      words: {
        cssDirection: {fa: 'rtl', en: 'ltr'},
        cssAlign: {fa: 'right', en: 'left'},
        others: {fa: 'غیره', en: 'Others'},
        card: {fa: 'کارت', en: 'Card'},
        border: {fa: 'بردر', en: 'Border'},
        baseInput: {fa: 'ورودی ساده', en: 'Base Input'},
        currencyInput: {fa: 'ورودی پول', en: 'Currency Input'},
        editableText: {fa: 'متن قابل ویرایش', en: 'Editable Text'},
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
