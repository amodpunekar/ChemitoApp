$(document).ready(function(){

	/*var xmlhttp = new XMLHttpRequest();
	var url = "data/data.json";

	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myArr = JSON.parse(this.responseText);
	        myFunction(myArr);
	    }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send(); */
	
	
	var funcText = [
						"Route setting for Destination Displays (with configuration to set no. of displays with IDs) - 5000 routes with destination name & route no. for metro cities",
						"Stop functionality with GPS on Inbus display",
						"Stop functionality with GPS on announcement system",
						"Manual Stop functionality with switch operation on Inbus display",
						"Manual Stop functionality with switch operation on announcement system",
						"Selection of Internal GPS or external GPS",
						"Displaying adhoc Message on Inbus",
						"Displaying of Messages or destinations in maximum 10 screens of multiple languages. In case of stop information one screen is displayed at one time and information is not stored in display",
						"Playing of Stops in maximum 3 languages",
						"Playing audio files of .wav or MP3 format",
						"Playing announcements from MIC",
						"Initiating announcement diagnostic",
						"Adjustment of volume control",
						"Synchronous operation of displaying of stop and playing corresponding audio files",
						"On board Nand flash Memory storage (64 GB bits - 8 GB Bytes max) to store routes messages with 150 destinations and 50 stops per route. One route message can be stored in 10 screens of display with length of 900 columns each.",
						"Selection for playing header file before every announcement",
						"Playing of 10 no. precorded fixed announcement from single key operation",
						"Displaying clock from GPS on Inbus at regular intervals as per configuration",
						"Displaying Driver & conductor ID on Inbus by configuring com port for either GPRS or RFID",
						"Supporting 12 modes of displays including rolling in both direcion, flashing, freez mode, 2 line rolling, showing routes with extensions etc.",
						"Driving third party displays of Hanover make with all modes",
						"Driving third party displays of Mobitech make with all modes",
						"Driving third party displays of Autometer make with all modes",
						"Playing of hooter in emergency mode, intiated by pressing of Emergency switch from remote places.",
						"Playing either announcement or hooter as per selection and reverting back.",
						"Volume control to full only for hooter",
						"Blinker operation at emergency  is supported",
						"Uploading of GPS data to Central server via GPRS",
						"Remote route setting via. GPRS",
						"Remote message display via.GPRS",
						"Tracker functions with IBDC HMI interface (4 varieties) via. GPRS. GPS data uploading, Vehical Speed Control alarm",
						"Firmware upgradeing via. GPRS",
						"GPRS diagnostic",
						"Collecting & Sending PID DTC code data to central server via. GPRS",
						"Engine data to be collected via. CAN",
						"Uploading of Engine data to central server via. GPRS",
						"Emergency Switch - Bus Stopping display on Inbus",
						"Configuration of LCD backlite timing"
					];
	
	var totalFuncs = funcText.length;

	var prodArray = [
						["f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12","f13","f14","f15","f16","f17","f18","f19","f20","f21","f22","f23","f24","f25","f26","f28","f29","f30","f31","f32","f33","f34","f35","f36","f37","f38"],
						["f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12","f13","f14","f15","f16","f17","f18","f19","f20","f21","f22","f23","f24","f25","f26","f38"],
						["f11","f24","f26","f27"],
						["f1","f8","f9","f11","f13","f15","f17","f20","f21","f22","f23","f24","f25","f26","f27"]
					];

	var prodNames = ["IBDC-GPRS","IBDC-Blkr","PA 01","PA 02"];

	var selFuncs = [];
	var matchProds = [];
	
	for(var i=1; i<=totalFuncs; i++){
		var funcRow = $("<div></div>")
			.addClass("row")
			.addClass("func")
			.attr("id","f"+i)
			.click(function(){
				$(this).toggleClass("funcSel");
				
				toggleFuncSel($(this).attr("id"));
			});

		var funcNum = $("<div></div>")
			.addClass("col-xs-1")
			.addClass("handCursor")
			.text(i)

		funcRow.append(funcNum);

		var funcDiv = $("<div></div>")
			.addClass("col-xs-11")
			.addClass("handCursor")
			.text(funcText[i-1])
			/*.attr("id","f"+i)
			
			.click(function(){
				$(this).toggleClass("funcSel");
				
				toggleFuncSel($(this).attr("id"));
		});*/

		funcRow.append(funcDiv);
		
		$("#funcsContainer").append(funcRow);
	}
	
	$("#btnSubmit").click(function(){
		clearProdsFromModal();
		chkProds();
		addProdsToModal();
	});
	
	function toggleFuncSel(value){
		var index = selFuncs.indexOf(value);

		if (index === -1){
			selFuncs.push(value);
		}else{
			selFuncs.splice(index, 1);
		}

		console.log(selFuncs);
	}

	function chkProds(){
		matchProds = [];
		var c = 0;
		for(var j=prodArray.length-1; j>=0; j--){
			for(var i=0; i<selFuncs.length; i++){
				for (var k=0; k<prodArray[j].length; k++) {
					if (selFuncs[i] === prodArray[j][k]) {
						c++;
					}
				}
			}
			if(c==selFuncs.length){
				matchProds.push(prodNames[j]);
			}
			c = 0;
		}
		console.log(matchProds);
	}

	function addProdsToModal(){
		for(var m=matchProds.length-1; m>=0; m--){
			var prodsList = $("<li></li>").text(matchProds[m]);
			$("#listOfProds").append(prodsList);
		}
		$("#productsContainer").modal();
		// $("#productsContainer").css("display","block")
	}

	function clearProdsFromModal(){
		var list = document.getElementById("listOfProds");
		while (list.hasChildNodes()) {   
		    list.removeChild(list.firstChild);
		}
	}
});