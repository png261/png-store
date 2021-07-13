export function generateUserName(userName) {
	if (!userName) return;
	return userName
		.split(' ')
		.map((str) => str[0])
		.slice(0, 2)
		.join('');
}
