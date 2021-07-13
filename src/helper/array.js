export function randomArray(arr) {
	if (!Array.isArray(arr)) return;
	return arr.sort(() => Math.random() - 0.5);
}
