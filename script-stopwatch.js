
let x=document.getElementById("output");
let y=document.getElementById("laps");

let pause=true;//it means that the stop_watch is stop rn
let minutes=0;
let hours=0;
let seconds=0;
let lap_counter=0;


function start_timer(){
	if (pause== true){
	pause = false;
	timer();
	};
};

function timer(){
	
	if(pause == false){
		
		minutes=parseInt(minutes);
		seconds=parseInt(seconds);
		hours=parseInt(hours);	
		seconds++
	
		if(seconds==60){
			minutes+=1;
			seconds=0;
			// console.log(minutes)
			
		}
		if(minutes==60){
			hours+=1
			minutes=0;	
		}
		
		if(hours < 10){
			hours= "0"+ hours;
		}

		if(minutes < 10){
			minutes = "0"+ minutes;
		}

		if(seconds < 10){
			seconds= "0"+ seconds;
		};

		

		x.innerHTML = hours +":"+minutes+":"+seconds
		setTimeout("timer()",1000);//agr yae nahi lagata tou loop nahiahi 
								// banta agr loop nahi banta tou bs ek bar chal kr ruk jata take 
								// yae chalta rahe jab tk condition false na hojae hum nae yae use kia iss ko python mae hum recursion kehtae thae
	}
}

function record_lap() {if (true) {}
  			lap_counter++;
  			let lap_time = hours + ":" + minutes + ":" + seconds 
  			let new_lap = document.createElement("div");
  			new_lap.innerHTML = "Lap " + lap_counter + ": " + lap_time;
  			y.appendChild(new_lap);
}
function stop_timer(){
	if(pause==false){
	pause=true;

}
}

function reset_timer(){
	x.innerHTML = "00:00:00";
	y.innerHTML = "";
	pause = true;
	hours = 0;
	seconds = 0;
	minutes = 0;
	lap_counter=0;

}



