"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import promotionImg from "@/assets/images/promotion.png";
import React from "react";
import Countdown from "react-countdown";
import { DollarSignIcon, HeadsetIcon, LockIcon, ShipIcon } from "lucide-react";

export default function Promotion() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3); // Countdown for 3 days from now

  // Countdown renderer callback
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <p className="text-lg">Promotion ended</p>;
    } else {
      return (
        <div className="flex space-x-4 text-center">
          <div>
            <span className="block text-3xl bg-white p-2">{days}</span>
            <span>Days</span>
          </div>
          <div>
            <span className="block text-3xl bg-white p-2">{hours}</span>
            <span>Hours</span>
          </div>
          <div>
            <span className="block text-3xl bg-white p-2">{minutes}</span>
            <span>Minutes</span>
          </div>
          <div>
            <span className="block text-3xl bg-white p-2">{seconds}</span>
            <span>Seconds</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="py-6 sm:py-8 lg:py-12">
      {/* Promotion */}
      <div className="flex flex-col overflow-hidden bg-[#ffdd99] sm:flex-row-reverse md:h-auto">
        {/* Content start */}
        <div className="flex w-full flex-col justify-center p-4 sm:w-1/2 sm:p-8 lg:w-1/2">
          <span className="mb-4 text-lg uppercase font-medium text-blue-500">
            Promotion
          </span>

          <h2 className="mb-4 text-xl text-black md:text-2xl lg:text-5xl">
            Hurry up! 40% OFF
          </h2>

          <p className="mb-8 max-w-md text-lg">
            Thousands of high tech are waiting for you
          </p>

          <div className="mb-4">
            <p className="text-lg mb-2">Offer expires in:</p>
            <Countdown date={targetDate} renderer={renderer} />
          </div>

          <div>
            <Button asChild size="lg">
              <Link href="/products">Shop now</Link>
            </Button>
          </div>
        </div>
        {/* Content end */}

        {/* Image start */}
        <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-1/2">
          <Image
            src={promotionImg}
            loading="lazy"
            alt="Promotion"
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/* Image end */}
      </div>
      {/* Features */}
      <Features />
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: <ShipIcon size={45} />,
      title: "Free Shipping",
      description: "Order above $200",
    },
    {
      icon: <DollarSignIcon size={45} />,
      title: "Money-back",
      description: "30 days guarantee",
    },
    {
      icon: <LockIcon size={45} />,
      title: "Secure Payments",
      description: "Secured by Stripe",
    },
    {
      icon: <HeadsetIcon size={45} />,
      title: "24/7 Support",
      description: "Phone and Email support",
    },
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-center w-full px-4 py-6 bg-gray-50 rounded-md shadow-md"
          >
            <div className="mb-3 text-gray-700">{feature.icon}</div>
            <h3 className="text-xl">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
