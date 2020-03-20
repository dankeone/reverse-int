module.exports = function reverse (n) {
  	n +="";
	let str = n.split('');
	let rever = str.reverse('');
	rever = rever.join('');
	let res = parseInt(rever);
	return(res);

}
