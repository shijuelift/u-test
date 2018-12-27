//1
module.exports = {
	add: (...args) => {
		return args.reduce((a,b)=> a+b)
	},
	mul: (...args) => {
		return args.reduce((a,b) => a*b)
	},
	cover: (a, b) => {
		if (a>b){
			return a-b
		} else if(a==b){
			return a+b
		} else {
			return min(a,b)
		}
	}
}

function min(a,b) {
	console.log(a,b)
	const c = 3
	console.log(b-a)
	return (b-a) * c
}