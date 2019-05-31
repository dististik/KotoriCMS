// Load parser using Remarkable library
let md = new Remarkable();
// Function to call when saving an html file
function saveHTML(htmlVal){
	// Log the parsed MD and set it to a variable
	let $html = md.render(htmlVal);
	console.log($html);
	// Create HTML file
	let blob = new Blob([`${$html}`],{type:'text/html;charset=utf-8'});
	// Save created file
	saveAs(blob,"Untitled.html");
}