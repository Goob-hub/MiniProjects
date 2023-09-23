const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let endDateTxt = document.querySelector(".end-date");
let daysTxt = document.querySelector(".days");
let hrsTxt = document.querySelector(".hrs");
let minsTxt = document.querySelector(".mins");
let secsTxt = document.querySelector(".secs");

let numOfDays = 10;
let curDate = new Date();

let monthDay = curDate.getDate();
let year = curDate.getFullYear();
let month = monthNames[curDate.getMonth()];
let dayName = dayNames[curDate.getDay() - 1];
let hrs = curDate.getHours();
let mins = curDate.getMinutes();
let secs = curDate.getSeconds();
let curTime = curDate.toLocaleTimeString('en-US', { hour12: false });

let endDate = new Date(`${month} ${monthDay}, ${year} 11:30:00`);
endDate.setDate(monthDay + 10);

let endMonthDay = endDate.getDate();
let endDateYear = endDate.getFullYear();
let endMonth = monthNames[endDate.getMonth()];
let endDayName = dayNames[endDate.getDay() - 1];
let endHrs = endDate.getHours();
let endMins = endDate.getMinutes();
let endSecs = endDate.getSeconds();
let endTime = endDate.toLocaleTimeString('en-US', { hour12: false });


endDateTxt.textContent = `${endDayName}, ${endMonthDay} ${endMonth} ${endDateYear} 11:30AM`;


let secsCount;
let minsCount;
let hrsCount;
let daysCount = numOfDays - 1;

if(endHrs > hrs) {
    hrsCount = endHrs - hrs;
} else if (endHrs < hrs) {
    hrsCount = 24 - (hrs - endHrs);
}

if(endMins > mins) {
    minsCount = endMins - mins;
} else if (endMins < mins) {
    minsCount = 60 - (mins - endMins);
}

if(endSecs > secs) {
    secsCount = endSecs - secs;
} else if (endSecs < secs) {
    secsCount = 60 - (secs - endSecs);
}

hrsTxt.textContent = hrsCount;
minsTxt.textContent = minsCount;
secsTxt.textContent = secsCount;
daysTxt.textContent = daysCount;



function updateText() {
    
    if(secsCount > 0){
        secsCount--
    } else {
        secsCount = 60;
        minsCount -= 1;
    }

    if(minsCount <= 0){
        minsCount = 59;
        hrsCount -= 1;
    }
    if(hrsCount <= 0) {
        hrsCount = 23;
        daysCount -=1;
    }
    secsTxt.textContent = secsCount;
    minsTxt.textContent = minsCount;
    hrsTxt.textContent = hrsCount;
    daysTxt.textContent = daysCount;
}

setInterval(() => {
    updateText();
}, 1000);



