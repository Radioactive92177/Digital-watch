
function clock()
{
    var s= new Date();
    var hr = s.getHours();
    var min = s.getMinutes();
    var sec = s.getSeconds();
    var day = s.getDay();
    var date = s.getDate();
    var month = s.getMonth();
    var year = s.getYear();

    /* week day */
    switch(day){

        case 0:
            day="sunday";
            break;
        case 1:
            day="monday";
            break;
        case 2:
            day="tuesday";
            break;
        case 3:
            day="wednesday";
            break;
        case 4:
            day="thursday";
            break;
        case 5:
            day=" friday";
            break;
        case 6:
            day="saturday";
    }

    /* concating 0 to single digits */
    if(hr<10){
        hr="0"+hr;
    }
    if (min<10) {
        min="0"+min;
    }
    if (sec<10) {
        sec="o"+sec;
    }

    /* month */
    switch(month){
        case 0:
            month="January"
            break;
        case 1:
            month="February"

        case 2:
            month="March"
            break;
        case 3:
            month="April"
            break;
        case 4:
            month="May"
            break;
        case 5:
            month="June"
            break;
        case 6:
            month="July"
            break;
        case 7:
            month="August"
            break;
        case 8:
            month="September"
            break;
        case 9:
            month="October"
            break;
        case 10:
            month="November"
            break;
        case 11:
            month="December"
            break;
    }
        
    document.getElementById("time").innerHTML = hr+":"+min+":"+sec; /* returns the HTML content (inner HTML) of an element*/
    document.getElementById("date").innerHTML = day + ", " + date + "." + month + "." + year;
            
}
setInterval(clock, 1000); /* will call clock function after each second */