
setInterval(()=>{
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	ms = d.getMilliseconds();
	//--------------------------------------rotation-of-hands-----------------------------
	hour_rotation = 30*h + m/2;
	minutes_rotation = 6*m;
	seconds_rotation = 6 * s + 0.006 * ms;

	hour.style.transform = `rotate(${hour_rotation}deg)`;
	minute.style.transform = `rotate(${minutes_rotation}deg)`;
	second.style.transform = `rotate(${seconds_rotation}deg)`;
},1000);
let d = new Date();
//where d is date
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let monthArr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];//this is done to display short names of month instead of numbers
let dayArr = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

let presentDay = `${dayArr[day]}`;
let presentDate = `${date} ${monthArr[month]} ${year}`

document.getElementById('present-day').innerText = presentDay;
document.getElementById('date').innerText = presentDate;

//Digital Clock
function time() {
    let meridian = 'AM';
    if (h >= 12) {
        h = h - 12;
        meridian = 'PM';
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let presentTime = `${h}: ${m}: ${s} ${(meridian)}`;
    document.getElementById('display-clock').innerText = presentTime;
}
setInterval(time, 1000);
