const settings = {
	tableClass: '',
	theadClass: '',
	tbodyClass: '',
	headerClass: '',
	cellClass: 'cell',
	filterInputClass: '',
	filterPlaceholder: 'جستجو در لیست ...',
	filterNoResults: 'هیچ داده ای یافت نشد'
}

export function mergeSettings(newSettings) {
	for (const setting in newSettings) {
		settings[setting] = newSettings[setting]
	}
}

export default settings
