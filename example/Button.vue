<template>
<div>
    <h2 id="form">{{translate('buttons')}}</h2>
    <section id="buttons">
      <h4>{{translate('simpleButton')}}</h4>
      <ty-card>
        <code class="example">{{examples['simpleButton']}}</code>
        <div>
        <ty-button>رنگ اصلی</ty-button>
        <ty-button icon="ty-icon-search" color="success">Success color</ty-button>
        <ty-button disabled icon="ty-icon-search" color="success">غیر فعال</ty-button>
        <ty-button color="dark">Success color</ty-button>
        <ty-button size="small" color="light">سایز small</ty-button>
        <ty-button color="light">Success color</ty-button>
        <ty-button size="large" color="light">سایز large</ty-button>
        <ty-button size="small" icon="ty-icon-sort"/>
        <ty-button type="outline">Outline type</ty-button>
        <ty-button type="outline" color="success">Outline type</ty-button>
        <ty-button type="outline" color="border"><i class="ty-icon ty-icon-arrow-right ty-color-dark"/></ty-button>
        <ty-button type="clear" color="border"><i class="ty-icon ty-icon-arrow-right ty-color-dark"/></ty-button>
        </div>
      </ty-card>
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
        buttons: {fa: 'دکمه ها', en: 'Buttons'},
        icons: {fa: 'آیکون', en: 'Icon'},
        simpleButton: {fa: 'دکمه ساده', en: 'Simple Button'},
        currencyInput: {fa: 'ورودی پول', en: 'Currency Input'},
        editableText: {fa: 'متن قابل ویرایش', en: 'Editable Text'},
        editableNumber: {fa: 'عدد قابل ویرایش', en: 'Editable Number'},
        placeholder: {fa: 'متن جایگزین', en: 'Placeholder'},
        selects: {fa: 'انتخاب', en: 'Selects'},
        basicSelect: {fa: 'انتخاب ساده', en: 'Basic Select'},
        fontDesinger: {fa: 'طراح فونت: مجتبی نواده', en: 'Font Designer: Mojtaba Navadeh'}
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
        simpleButton: '<ty-button>کلیک کنید</ty-button>'
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
