import Input from './Components/Input/Input.vue'
import InputNumber from './Components/Input/InputNumber.vue'
import CurrencyInput from './Components/Input/CurrencyInput.vue'
import EditableText from './Components/Input/EditableText.vue'
import EditableNumber from './Components/Input/EditableNumber.vue'
import Select from './Components/Select/Select.vue'
import Option from './Components/Select/Option.vue'
import Card from './Components/Others/Card.vue'
import Border from './Components/Others/Border.vue'
import Acardion from './Components/Others/Acardion.vue'
import AcardionItem from './Components/Others/AcardionItem.vue'
import Button from './Components/Button/Button.vue'
import Table from './Components/Data/Table.vue'
import TableColumn from './Components/Data/TableColumn.js'
import Container from './Components/Layouts/Container.vue'
import Main from './Components/Layouts/Main.vue'
import Aside from './Components/Layouts/Aside.vue'
import Header from './Components/Layouts/Header.vue'
import Footer from './Components/Layouts/Footer.vue'
import Row from './Components/Layouts/Row'
import Col from './Components/Layouts/Col'
import Iframe from './Components/Others/Iframe.vue'
import Modal from './Components/Others/Modal.vue'
import './style/index.scss'

import Tabs from './Components/Tabs/Tabs.vue'
import Tab from './Components/Tabs/Tab.vue'
const components = [
	Input,
	InputNumber,
	CurrencyInput,
	EditableText,
	EditableNumber,
	Select,
	Option,
	Card,
	Border,
	Button,
	Table,
	TableColumn,
	Container,
	Main,
	Aside,
	Header,
	Footer,
	Row,
	Col,
	Acardion,
	AcardionItem,
	Iframe,
	Modal,
	Tabs,
	Tab
]

const install = function(Vue, opts = {}) {
	components.forEach(component => {
		Vue.component(component.name, component);
	})
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	version: '1.0.0',
	install,
	Input,
	InputNumber,
	CurrencyInput,
	EditableText,
	EditableNumber,
	Select,
	Option,
	Card,
	Border,
	Button,
	Table,
	TableColumn,
	Container,
	Main,
	Aside,
	Header,
	Footer,
	Row,
	Col,
	Acardion,
	AcardionItem,
	Iframe,
	Modal,
	Tabs,
	Tab
}