
let hr = document.getElementById("hours");
let min = document.getElementById("minute");
let sce = document.getElementById("second");

let ctrhr = 0;

let ctrmin = 0;

let ctrsce = 0;

let run;


function start() {
    timer();
   // ctrmin = "0";
   // ctrhr = "0";
}

function stop() {

    clearInterval(run)

}

function reset() {
    hr.innerText = ctrhr =   0;
    min.innerText = ctrmin =   0;
    sce.innerText = ctrsce =   0;
}

function timer() {
    run = setInterval(() => {

        ctrsce++;

        if (ctrsce == 6) {
            ctrsce = 0;
        }
        else if (ctrsce == 5) {
            ctrmin++;

        }
        else if (ctrmin == 5) {
            ctrmin = 0;
        }

        if (ctrsce == 5 && ctrmin == 5) {
            ctrhr++
        }

        hr.innerText = ctrhr;
        min.innerText = ctrmin;
        sce.innerText = ctrsce;
         
        (hr.innerText < 10) ? hr.innerText = "0" + ctrhr : "";
        (min.innerText < 10) ? min.innerText = "0" + ctrmin : "";
        (sce.innerText < 10) ? sce.innerText = "0" + ctrsce : "";


    }, 1000);

}



