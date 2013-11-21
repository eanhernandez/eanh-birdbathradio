function doSubmit() {

document.frmmain.email.value=document.form1.input_email.value;
//alert(document.frmmain.email.value);
document.frmmain.submit();
}

ns4 = document.layers
ie4 = document.all
nn6 = document.getElementById && !document.all

function hideObject() {
   if (ns4) {
      document.n1.visibility = "hide";
   }
   else if (ie4) {
      document.all['n1'].style.visibility = "hidden";
   }
   else if (nn6) {
      document.getElementById('n1').style.visibility = "hidden";
   }
}

// Show/Hide functions for pointer objects

function showObject(id) {

	request = createRequest();
	request.onreadystatechange = complete;
	request.open("GET", "setlist.php?showid="+id, true);
	request.send(null);

   if (ns4) {
	  document.n1.style.bottom = '20%';
      document.n1.visibility = "show";
   }
   else if (ie4) {

      document.all['n1'].style.bottom = '2%';
      document.all['n1'].style.visibility = "visible";
   }
   else if (nn6) {
      document.getElementById('n1').style.bottom = '20%';
      document.getElementById('n1').style.visibility = "visible";
   }
}

	function complete() {
		switch(request.readyState) {
			case 0:
			case 1:
			case 2:
			case 3: return;
			case 4: var out = request.responseText; break;
		}

		//variables
		var content = document.getElementById("n1");
		//change text
		content.innerHTML = out;

	}

	function createRequest() {

		try {
			//mozilla browsers
			var request = new XMLHttpRequest();
		} catch(ex) {
			try {
				//newer internet explorers
				var request = new ActiveXObject("MSXML2.XMLHTTP");
			} catch(ex) {
				//older internet explorers
				var request = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}

		return request;

	}
