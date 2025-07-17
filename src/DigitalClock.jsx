import { useEffect, useState } from "react";
let hour;
let minute;
let seconds;
function DigitalClock(){
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
        const Interval=setInterval(async()=>{ setTime(new Date())},900);
        return ()=>{
            clearInterval(Interval);
        }
    },[]);
function appendzero(n){
return (n<10?"0":"")+n;
}
function formatTime(){
     hour=time.getHours();
     minute=time.getMinutes();
     seconds=time.getSeconds();
    hour=hour%12||12;
    
    return `${appendzero(hour)}:${appendzero(minute)}:${appendzero(seconds)} ${time.getHours()>=12?"PM":"AM"}`;
}    
function formatDate(){
    let day=time.getDay();
    let week;
if(day==1){
week="Monday";
}else if(day==2){
week="Tuesday";
}else if(day==3){
week="Wednesday";
} else if(day==4){
week="Thursday";
} else if(day==5){
week="Friday";
} else if(day==6){
week="Saturday";
} else if(day==7){
week="Sunday";
} 

    let Date=time.getDate();
    let Month=time.getMonth();
    let Year=time.getFullYear();
    return `${week} ${Date}-${Month}-${Year}`;
}

return(<>
<h2><div className="date">{formatDate()}</div></h2>
        <div className="Clock-container">
          <div className="clock">
            <h1>{formatTime()}</h1>
          </div>
        </div>
        </>
      );
}
export default DigitalClock