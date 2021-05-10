<template>
<div>
    <h2 id="form">{{translate('fonts')}}</h2>
    <section id="icons">
      <h4>{{translate('icons')}}</h4>
      <ty-card dir="ltr">
        <code class="example">{{icon_example}}</code>
        <div class="grid">
          <div v-for="item in icons" :key="item">
            <i class="ty-icon" :class="item"/>
            {{item}}
          </div>
        </div>
        <div class="designer">
          {{translate('fontDesinger')}}
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
        fonts: {fa: 'فونت ها', en: 'Fonts'},
        icons: {fa: 'آیکون', en: 'Icon'},
        baseInput: {fa: 'ورودی ساده', en: 'Base Input'},
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
        'ty-icon-smile',
        'ty-icon-sad',
        'ty-icon-tag',
        'ty-icon-zoom-in',
        'ty-icon-plus-circle',
        'ty-icon-minus-circle',
        'ty-icon-close-circle',
        'ty-icon-heart',
        'ty-icon-heart-outline',
        'ty-icon-call',
        'ty-icon-image',
        'ty-icon-image-outline',
        'ty-icon-delete',
        'ty-icon-delete-outline',
        'ty-icon-eye-open',
        'ty-icon-tag',
        'ty-icon-time',
        'ty-icon-pin-on-map',
      ],
      icon_example: `
      <i class="ty-icon ty-icon-sort"></i>
      `
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
