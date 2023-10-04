// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

const printTriangle = () => {
	for (let str = '#'; str.length <= 7; str+= "#")  {
		console.log(str);
	}
};

printTriangle();