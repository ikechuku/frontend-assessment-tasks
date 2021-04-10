import React, { useEffect, useState } from "react";

const MainApp = () => {
  return (
    <div>
      <div className="overlay"></div>
      <div className="MainApp">
        <div className="text-gray-300 text-4xl py-2 text-base font-semi-bold">
          Ramadan Countdown Banner
        </div>
        <div className="h-screen container border flex my-40 justify-center">
          <h3 className="mx-20 mt-20 text-gray-400 font-semibold">
            Count down to next Sehri
          </h3>
          <div className="banner p-5">
            <div>
              <h1 className="text-white text-4xl animate-pulse">
                <Timer />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainApp;

const Timer = ({ fastDate }) => {
  // const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let countDownDate = fastDate || new Date("Jul 7, 2021 15:37:25").getTime();

  var countdownfunction = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    // setDays(days);
    setHours(hours);
    setMins(minutes);
    setSeconds(seconds);

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(countdownfunction);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

  return (
    <div>
      {/* <h1>{timeLeft}</h1> */}

      <h1 className="text-5xl">
        {`${hours} : ${mins}`}
        <span className="animate-ping">{` ${seconds}`}</span>
      </h1>
    </div>
  );
};
