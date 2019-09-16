let map = new Map();
map.set(1, 10);
map.set(2, 20);
alert(map.size)
map.forEach((key, value, amp) => {
	alert(`${key}:${value}`);
});
