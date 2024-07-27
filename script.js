document.addEventListener('DOMContentLoaded', () => {

function dat() {
const now = new Date();
const dateandtime = now.toLocaleString('en-US', {timeZone: 'Asia/Kolkata'});
        
document.getElementById('datetime').innerHTML = dateandtime;
console.log(dateandtime);
}

dat();
setInterval(dat, 1000);
});