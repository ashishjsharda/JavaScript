const dateformat=new Intl.DateTimeFormat("de-AT");
const date = new Date("2021-03-18");
const format = dateformat.format(date);
console.log(format);
