import React, { useEffect, useState } from "react";

const MainApp = () => {
  return (
    <div>
      <div className="overlay"></div>
      <div className="MainApp">
        <div className="text-gray-300 text-4xl py-2 text-base font-semi-bold">
          Ramadan Countdown Banner
        </div>
        <div className="container flex my-40 justify-center">
          <h3 className="mx-20">Banner</h3>
          <div className="banner">
            <div>
              <h1 className="text-white text-2xl">
                <Timer seconds={3000000} />
                left
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainApp;
const Timer = ({ seconds }) => {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(seconds);

  const displayTimeLeft = (seconds) => {
    let hoursLeft = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = seconds % 60;
    minutesLeft =
      minutesLeft.toString().length === 1 ? "0" + minutesLeft : minutesLeft;
    secondsLeft =
      secondsLeft.toString().length === 1 ? "0" + secondsLeft : secondsLeft;
    return `${hoursLeft}:${minutesLeft}:${secondsLeft}`;
  };

  useEffect(() => {
    // exit early when we reach 0

    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    // clear interval on re-render to avoid memory leaks

    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  return (
    <div>
      <h1>{displayTimeLeft(timeLeft)}</h1>
    </div>
  );
};
