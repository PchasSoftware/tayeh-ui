<template>
<div>
	<h2 id="form">{{translate('layouts')}}</h2>
    <section id="layout">
		<div class="component">
		<h4>{{translate('container')}}</h4>
        	<code class="example"><pre>{{examples['layout']}}</pre></code>
		<ty-container>
		  <ty-header>سربرگ</ty-header>
		  <ty-container>
		    <ty-aside width="200px">کنار</ty-aside>
		    <ty-main>محتوای اصلی</ty-main>
		  </ty-container>
		  <ty-footer>پایین صفحه</ty-footer>
		</ty-container>

		<h4>{{translate('grid')}}</h4>
		<code class="example"><pre>{{examples['layout']}}</pre></code>
		<ty-row>
		  <ty-col :span="24"><div class="grid-content bg-blue-dark"></div></ty-col>
		</ty-row>
		<ty-row>
		  <ty-col :span="12"><div class="grid-content bg-blue"></div></ty-col>
		  <ty-col :span="12"><div class="grid-content bg-blue-light"></div></ty-col>
		</ty-row>
		<ty-row>
		  <ty-col :span="8"><div class="grid-content bg-blue"></div></ty-col>
		  <ty-col :span="8"><div class="grid-content bg-blue-light"></div></ty-col>
		  <ty-col :span="8"><div class="grid-content bg-blue"></div></ty-col>
		</ty-row>
		<ty-row>
		  <ty-col :span="6"><div class="grid-content bg-blue"></div></ty-col>
		  <ty-col :span="6"><div class="grid-content bg-blue-light"></div></ty-col>
		  <ty-col :span="6"><div class="grid-content bg-blue"></div></ty-col>
		  <ty-col :span="6"><div class="grid-content bg-blue-light"></div></ty-col>
		</ty-row>
		<ty-row>
		  <ty-col :span="4"><div class="grid-content bg-blue"></div></ty-col>
		  <ty-col :span="4"><div class="grid-content bg-blue-light"></div></ty-col>
		  <ty-col :span="4"><div class="grid-content bg-blue"></div></ty-col>
		  <ty-col :span="4"><div class="grid-content bg-blue-light"></div></ty-col>
		  <ty-col :span="4"><div class="grid-content bg-blue"></div></ty-col>
		  <ty-col :span="4"><div class="grid-content bg-blue-light"></div></ty-col>
		</ty-row>
		</div>
    </section>
    <section id="tabs">
		<div class="component">
		<h4>{{translate('tabs')}}</h4>
        	<code class="example"><pre>{{examples['tabs']}}</pre></code>
		 <ty-tabs :options="{ useUrlFragment: false }" opacity=".5">
        <ty-tab border-color="success" id="1" name="First ty-tab">
            This is the content of the first ty-tab
        </ty-tab>
        <ty-tab id="2" name="Second ty-tab">
            This is the content of the second ty-tab {{variable}}
            <ty-select v-model="variable">
              <ty-option value="1"/>
              <ty-option value="2"/>
              <ty-option value="3"/>
            </ty-select>
        </ty-tab>
        <ty-tab id="3" name="Disabled ty-tab" :disabled="true">
            This content will be unavailable while :disabled prop set to true
        </ty-tab>
        <ty-tab id="4" name="Custom fragment">
            The fragment that is appended to the url can be customized
        </ty-tab>
    </ty-tabs>

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
      activeName: null,
      variable: 1,
      words: {
        cssDirection: {fa: 'rtl', en: 'ltr'},
        cssAlign: {fa: 'right', en: 'left'},
        layouts: {fa: 'قالب ها', en: 'Layouts'},
        container: {fa: 'بخش بندی', en: 'Container'},
        grid: {fa: 'تقسیم صفحه', en: 'Grid Layout'},
        card: {fa: 'کارت', en: 'Card'},
        baseInput: {fa: 'ورودی ساده', en: 'Base Input'},
        currencyInput: {fa: 'ورودی پول', en: 'Currency Input'},
        editableText: {fa: 'متن قابل ویرایش', en: 'Editable Text'},
        tabs: {fa: 'Tabs', en: 'Tabs'},
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
		layout: `
<ty-container>
	<ty-header>Header</ty-header>
	<ty-container>
		<ty-aside width="200px">Aside</ty-aside>
		<ty-main>Main</ty-main>
	</ty-container>
	<ty-footer>footer</ty-footer>
</ty-container>
    `,
    tabs: '<ty-tabs></ty-tab id="tab-1">Tab 1 Content</ty-tab></ty-tabs>'
      }
    }
  },
  methods: {
    translate(text) {
      return this.words[''+text][this.lang];
    },
    handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}
</script>
<style scoped>
  .ty-header, .ty-footer {
    background-color: #abcaf3;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .ty-aside {
    background-color: #92baee;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .ty-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .ty-container {
    margin-bottom: 40px;
  }
  
  .ty-container:nth-child(5) .ty-aside,
  .ty-container:nth-child(6) .ty-aside {
    line-height: 260px;
  }
  
  .ty-container:nth-child(7) .ty-aside {
    line-height: 320px;
  }

  .ty-row {
    margin-bottom: 20px;
  }
  .ty-row:last-child {
      margin-bottom: 0;
	}
  .ty-col {
    border-radius: 4px;
  }
  .bg-blue-dark {
    background: #abcaf3;
  }
  .bg-blue {
    background: #92baee;
  }
  .bg-blue-light {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #ffffff;
  }
</style>