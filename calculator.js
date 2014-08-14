
	calculate = document.querySelector("#calculate");
	calculate.addEventListener("click", Add);

	function CountryCodes(){
		self = {
			'ES': 1.21,
			'DE': 1.19,
			'FR': 1.12,
			'NO': 1.35,
			'IT': 1.20
		};
		return self;
	}
	
	function calculate_discount(price){
		if(price>100 && price <=500)
			return 0.98;
		else if(price>500 && price <1000)
			return 0.97;
		else if(price>=1000 && price <3000)
			return 0.95;
		else if(price>=3000 && price <10000)
			return 0.93;
		else if(price>=10000)
			return 0.90;
		else
			return 1;
	}

	function Add() {
		result = document.querySelector("#result");
		price = document.querySelector("#price").value;
		numproducts = document.querySelector("#products").value;
		country = document.querySelector("#country").value;
		var subtotal = parseFloat(price) * parseInt(numproducts);
		var discount = calculate_discount(subtotal);
		var tax = CountryCodes()[country];
		var total = subtotal * discount * tax;
		result.value = total;
	}