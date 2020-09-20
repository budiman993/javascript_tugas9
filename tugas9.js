var motor = {
	type :  "Bebek",
	harga : "Rp. 15.000.000,-",
	warna : "Hitam",
}

console.log("Data Motor Before :", motor)
console.log("Data Motor Menggunakan ForIn :")
for(var x in motor){
	console.log(motor[x])
}