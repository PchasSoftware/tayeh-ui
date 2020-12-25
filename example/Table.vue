<template>
<div>
    <h2 id="table">{{translate('buttons')}}</h2>
    <section id="baseTable">
      <h4>{{translate('baseTable')}}</h4>
      <div class="component">
        <code class="example">{{examples['baseTable']}}</code>
        <ty-table :data="sampleDatas">
          <ty-table-column  label="نام" prop="name"/>
          <ty-table-column  label="سن" prop="age">
          </ty-table-column>
          <ty-table-column min-width="200px"> 
            <template>
              <div>
              <ty-button icon="sort"/>
              </div>
            </template>
          </ty-table-column>
        </ty-table>

      </div>
    </section>
</div>
</template>

<script>
export default {
  name: 'Table',
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
        baseTable: {fa: 'جدول', en: 'Basic Table'},
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
	  sampleDatas: [
		  {name: 'Aref Akbari', age: '24', job: 'Developer'},
		  {name: 'SDF sdfsdf', age: '25', job: 'Developer'},
	  ],
      examples: {
        baseTable: '<ty-table></ty-table>'
      }
    }
  },
  methods: {
    translate(text) {
      return this.words[''+text][this.lang];
    },
    handleClick(e) {
      console.log('click', e);
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
