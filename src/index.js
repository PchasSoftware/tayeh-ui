import Input from './Input/Input.vue'
import CurrencyInput from './Input/CurrencyInput.vue'
import EditableText from './Input/EditableText.vue'
import EditableNumber from './Input/EditableNumber.vue'
import Select from './Select/Select.vue'
import Card from './Others/Card.vue'
import Border from './Others/Border.vue'
import Acardion from './Others/Acardion.vue'
import AcardionItem from './Others/AcardionItem.vue'
import Button from './Button/Button.vue'
import Table from './Data/Table.vue'
import TableColumn from './Data/TableColumn.vue'
import TableHeader from './Data/TableHeader.vue'
import TableRow from './Data/TableRow.vue'
import TableFooter from './Data/TableFooter.vue'
import TableBody from './Data/TableBody.vue'
import Container from './Layouts/Container.vue'
import Main from './Layouts/Main.vue'
import Aside from './Layouts/Aside.vue'
import Header from './Layouts/Header.vue'
import Footer from './Layouts/Footer.vue'
import Row from './Layouts/Row'
import Col from './Layouts/Col'
import Iframe from './Others/Iframe.vue'
import Modal from './Others/Modal.vue'
import './style/index.scss'

const components = [
	Input,
	CurrencyInput,
	EditableText,
	EditableNumber,
	Select,
	Card,
	Border,
	Button,
	Table,
	TableColumn,
	TableHeader,
	TableRow,
	TableFooter,
	TableBody,
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
	CurrencyInput,
	EditableText,
	EditableNumber,
	Select,
	Card,
	Border,
	Button,
	Table,
	TableColumn,
	TableHeader,
	TableRow,
	TableFooter,
	TableBody,
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
	Modal
}