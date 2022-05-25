//Given a time in -hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(s) {
    let militaryTime = "";
    if (s[8] === "A"){
        if(s[0] === "0"){
            militaryTime = s.slice(0,8);
        }
        else {
            let hours = "00"
            militaryTime = hours + s.slice(2,8);
        }
    }
    else {
        if(s[0] === "1" && s[1] === "2"){
            militaryTime = s.slice(0,8);
        }
        else {
            let hours = parseInt(s.slice(0,2));
            hours += 12;
            militaryTime = hours + s.slice(2,8);
        }
    }
    return militaryTime;
}

console.log(timeConversion("12:40:22AM"));