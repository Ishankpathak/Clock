setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

function digital() {
  setInterval(() => {
   
    P = new Date();
    hTime = P.getHours();

    mTime = P.getMinutes();
    sTime = P.getSeconds();
    if(hTime>12){
        hTime = hTime-12;
    }
    let a = hTime + " : " + mTime + " : " + sTime;
    document.getElementById("show").innerHTML = a;
  }, 1000);
}
