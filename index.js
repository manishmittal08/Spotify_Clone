const timeDisplay=document.querySelector(".curr-time");
const tracker=document.querySelector(".player");
const total=180;
let current_time=0;
tracker.max=total;
let last=0;
tracker.addEventListener("input",()=>{
    const curr=parseInt(tracker.value);
    current_time=Math.max(0,curr);
    if(curr!==last){
        current_time=curr;
        last=curr;
        update();
    }
    // last=curr;
    // tracker.value=current_time;
    // update();
});
function update(){
    timeDisplay.textContent=format(current_time);
}
function format(seconds){
    const min=Math.floor(seconds/60);
    const sec=Math.floor(seconds%60).toString().padStart(2,"0");
    return `${min}:${sec}`;
}
// tracker.addEventListener('change',()=>{
//     if(parseInt(tracker.value)===180){
//         current_time=180;
//         update();
//     }
// })
update();
//startTimer();
