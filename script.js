
function change_clock(clock_number, number){
    switch(number) {
	  case 0:
		document.getElementById("clock_" + clock_number + "0").className = "el_clock_0 is_active";
		document.getElementById("clock_" + clock_number + "1").className = "el_clock_1 is_active";
		document.getElementById("clock_" + clock_number + "2").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "3").className = "el_clock_0 is_inactive";
		document.getElementById("clock_" + clock_number + "4").className = "el_clock_1 is_active";
		document.getElementById("clock_" + clock_number + "5").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "6").className = "el_clock_0 is_active";
		break;
	  case 1:
		document.getElementById("clock_" + clock_number + "0").className = "el_clock_0 is_inactive";
		document.getElementById("clock_" + clock_number + "1").className = "el_clock_1 is_inactive";
		document.getElementById("clock_" + clock_number + "2").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "3").className = "el_clock_0 is_inactive";
		document.getElementById("clock_" + clock_number + "4").className = "el_clock_1 is_inactive";
		document.getElementById("clock_" + clock_number + "5").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "6").className = "el_clock_0 is_inactive";
		break;
	  case 2:
		document.getElementById("clock_" + clock_number + "0").className = "el_clock_0 is_active";
		document.getElementById("clock_" + clock_number + "1").className = "el_clock_1 is_inactive";
		document.getElementById("clock_" + clock_number + "2").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "3").className = "el_clock_0 is_active";
		document.getElementById("clock_" + clock_number + "4").className = "el_clock_1 is_active";
		document.getElementById("clock_" + clock_number + "5").className = "el_clock_2 is_inactive";
		document.getElementById("clock_" + clock_number + "6").className = "el_clock_0 is_active";
		break;
	  case 3:
		document.getElementById("clock_" + clock_number + "0").className = "el_clock_0 is_active";
		document.getElementById("clock_" + clock_number + "1").className = "el_clock_1 is_inactive";
		document.getElementById("clock_" + clock_number + "2").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "3").className = "el_clock_0 is_active";
		document.getElementById("clock_" + clock_number + "4").className = "el_clock_1 is_inactive";
		document.getElementById("clock_" + clock_number + "5").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "6").className = "el_clock_0 is_active";
		break;
	  case 4:
		document.getElementById("clock_" + clock_number + "0").className = "el_clock_0 is_inactive";
		document.getElementById("clock_" + clock_number + "1").className = "el_clock_1 is_active";
		document.getElementById("clock_" + clock_number + "2").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "3").className = "el_clock_0 is_active";
		document.getElementById("clock_" + clock_number + "4").className = "el_clock_1 is_inactive";
		document.getElementById("clock_" + clock_number + "5").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "6").className = "el_clock_0 is_inactive";
		break;
	  case 5:
		document.getElementById("clock_" + clock_number + "0").className = "el_clock_0 is_active";
		document.getElementById("clock_" + clock_number + "1").className = "el_clock_1 is_active";
		document.getElementById("clock_" + clock_number + "2").className = "el_clock_2 is_inactive";
		document.getElementById("clock_" + clock_number + "3").className = "el_clock_0 is_active";
		document.getElementById("clock_" + clock_number + "4").className = "el_clock_1 is_inactive";
		document.getElementById("clock_" + clock_number + "5").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "6").className = "el_clock_0 is_active";
		break;
	  case 6:
		document.getElementById("clock_" + clock_number + "0").className = "el_clock_0 is_active";
		document.getElementById("clock_" + clock_number + "1").className = "el_clock_1 is_active";
		document.getElementById("clock_" + clock_number + "2").className = "el_clock_2 is_inactive";
		document.getElementById("clock_" + clock_number + "3").className = "el_clock_0 is_active";
		document.getElementById("clock_" + clock_number + "4").className = "el_clock_1 is_active";
		document.getElementById("clock_" + clock_number + "5").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "6").className = "el_clock_0 is_active";
		break;
	  case 7:
		document.getElementById("clock_" + clock_number + "0").className = "el_clock_0 is_active";
		document.getElementById("clock_" + clock_number + "1").className = "el_clock_1 is_inactive";
		document.getElementById("clock_" + clock_number + "2").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "3").className = "el_clock_0 is_inactive";
		document.getElementById("clock_" + clock_number + "4").className = "el_clock_1 is_inactive";
		document.getElementById("clock_" + clock_number + "5").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "6").className = "el_clock_0 is_inactive";
		break;
	  case 8:
		document.getElementById("clock_" + clock_number + "0").className = "el_clock_0 is_active";
		document.getElementById("clock_" + clock_number + "1").className = "el_clock_1 is_active";
		document.getElementById("clock_" + clock_number + "2").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "3").className = "el_clock_0 is_active";
		document.getElementById("clock_" + clock_number + "4").className = "el_clock_1 is_active";
		document.getElementById("clock_" + clock_number + "5").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "6").className = "el_clock_0 is_active";
		break;
	  case 9:
		document.getElementById("clock_" + clock_number + "0").className = "el_clock_0 is_active";
		document.getElementById("clock_" + clock_number + "1").className = "el_clock_1 is_active";
		document.getElementById("clock_" + clock_number + "2").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "3").className = "el_clock_0 is_active";
		document.getElementById("clock_" + clock_number + "4").className = "el_clock_1 is_inactive";
		document.getElementById("clock_" + clock_number + "5").className = "el_clock_2 is_active";
		document.getElementById("clock_" + clock_number + "6").className = "el_clock_0 is_active";
		break;
	}
}

function clock(){
	var date = new Date(),
	hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
	minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
	seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
	change_clock(0, (hours - hours % 10) / 10);
	change_clock(1, hours % 10);
	change_clock(2, (minutes - minutes % 10) / 10);
	change_clock(3, minutes % 10);
	change_clock(4, (seconds - seconds % 10) / 10);
	change_clock(5, seconds % 10);
}

function change_sep_0(){
	for (let i = 0; i < 4; i++){
	document.getElementById("separator_" + i).className = "el_separator_active";
	}
	setTimeout(function change_sep_1() {
		for (let i = 0; i < 4; i++){
	        document.getElementById("separator_" + i).className = "el_separator_inactive";
	    }
	}, 1900);
}
setInterval(clock, 1000);
setInterval(change_sep_0, 3800);