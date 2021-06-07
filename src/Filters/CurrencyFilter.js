// function format (valString) {
// 	let val = valString.toString();
// 	return val.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')
// }

function currency (value) {
	return `${value}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
  
  export default currency