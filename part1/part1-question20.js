function getTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

setInterval(getTime, 1000);