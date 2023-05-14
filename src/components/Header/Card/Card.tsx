"use client";

import React, { useState } from "react";
import BellIcon from "../../../../images/bell.svg";
import GreenBellIcon from "../../../../images/greenbell.svg";
import CardImage from "../../../../images/cardimg.svg";
import CalendarIcon from "../../../../images/calendar.svg";
import Image from "next/image";

function Card() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className="bg-faded-gray w-75 h-32 flex items-center "
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}>
            <div>
                <Image src={CardImage} width="110" className="ml-3" alt=""/>
            </div>
            <main className="flex justify-between flex-grow mx-8">
                <div>
                    <p className="font-thin">Robosoccer lorem Ipsum</p>
                    <p className="font-thin">Some Description About the organisation</p>
                    <p className="flex font-thin">
                        <Image className="mr-1" src={CalendarIcon} alt=""/>
            Date
                    </p>
                </div>
                <Image src={isActive ? GreenBellIcon : BellIcon} alt=""/>
            </main>
        </div>
    );
}

export default Card;
