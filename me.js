let clock = setInterval(() => {
    console.clear();
    console.log(new Date().toLocaleTimeString());
    console.log("Danilão")
    let b = 52 * 2;
}, 1000);

/*
setTimeout(() => {
    clearInterval(clock);
}, 2000);
*/