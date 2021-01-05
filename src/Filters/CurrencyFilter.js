function format (valString) {
	let val = valString.toString();
	return val.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')
}

function currency (value) {
	return (value || value === 0)
	  ? format(value)
	  : ''
}
  
  export default currency