const test1 = () => {
	const projects = [
		{ id: 1, name: 'Option 1', probability: 0.3 },
		{ id: 2, name: 'Option 2', probability: 0.5 },
		{ id: 3, name: 'Option 3', probability: 0.15 },
		{ id: 4, name: 'Option 4', probability: 0.05 }
	]
	const randomGenerator = (arr) => {
		const index = Math.floor(Math.random() * 4);
		return arr[index]
	}
	let totalNumbers = [];
	for (let i = 500 - 1; i >= 0; i--) {
		const randomItem = randomGenerator(projects);
		totalNumbers[randomItem.id]++;
		console.log(randomItem.name)
	}
	for (let i = 3; i >= 0; i--) {
		console.log(`ID ${i + 1} = `, totalNumbers[i + 1]);
	}
}

test1()
