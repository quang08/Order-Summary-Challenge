import React from "react";
import PatternBackgroundDesktop from "../images/pattern-background-desktop.svg";
import PatternBackgroundMobile from "../images/pattern-background-mobile.svg";
import Hero from "../images/illustration-hero.svg";
import Music from "../images/icon-music.svg";
import HeroComp from "./Hero";

function Summary() {
  return (
    <div>
      <div>
        <img src={Hero} className="rounded-t-3xl w-full" />
      </div>

      <div className="bg-white p-10 rounded-b-3xl h-full">
        <h1 className="font-bold text-2xl">Order Summary</h1>
        <p className="p-5 text-sm text-gray-400">
          You can now listen to millions of songs, audiobooks, and podscasts on
          any device anywhere you like!
        </p>

        <div className="mt-4 w-full flex justify-between items-center p-4 rounded-lg bg-gray-400/20">
          <div className="flex justify-between">
            <p>
              <img src={Music} />
            </p>

            <div className="ml-3">
              <h3 className="font-bold">Annual Plan</h3>
              <p className="text-xs text-left text-gray-500">$59.99/year</p>
            </div>
          </div>

          <div className="transition duration-300 hover:-translate-y-1">
            <a
              href="/"
              className="text-blue-900 underline text-sm hover:text-blue-500"
            >
              Change
            </a>
          </div>
        </div>

        <div className="flex mt-10 flex-col gap-y-4 mb-4">
          <button className="bg-blue-800 font-bold p-3 rounded-lg text-white shadow-lg shadow-blue-800/60 transition duration-300 hover:-translate-y-1">
            Procced to Payment
          </button>

          <button className="font-bold text-gray-600 p-3 transition duration-300 hover:-translate-y-1">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
