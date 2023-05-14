"use client";

import GreenCalendarIcon from "../../../images/greencalendar.svg";
import ThreeDotIcon from "../../../images/threedot.svg";
import GreenShare from "../../../images/shareicon.svg";
import GreenView from "../../../images/viewicon.svg";
import SampleImage from "../../../images/carouselimage.svg";
import DeleteIcon from "../../../images/deleteicon.svg";
import EditIcon from "../../../images/editicon.svg";
import Image from "next/image";
import { useState } from "react";


export default function Page() {
    const [view, setView] = useState(false);

    return (
        <div className="w-100 container">
            <div className="bg-faded-gray w-463 h-480 rounded-md ring-1 ring-gray-600 mx-6 my-5 relative ">
                <div className="px-6 py-4 flex justify-between">
                    <p className="font-semibold text-xl">Robosoccer</p>
                    <Image src={ThreeDotIcon} alt="" onClick={() => setView(!view)} />
                    {view && (
                        <div className="absolute flex flex-col ml-18rem mt-7 w-125 h-98 bg-faded-gray items-center gap-3 py-3 ">
                            <p className="flex items-center font-light">
                                <Image className="mr-2" src={EditIcon} alt="" />
                Edit
                            </p>
                            <p className="flex items-center font-light">
                                <Image className="mr-2" src={DeleteIcon} alt="" />
                Delete
                            </p>
                        </div>
                    )}
                </div>
                <div className="flex justify-around w-64 mx-3 pl-3 gap-5 text-sm">
                    <p className="flex items-center font-thin">
                        <Image className="mr-2" src={GreenCalendarIcon} alt="" />
            12/10/2002
                    </p>
                    <p className="flex items-center font-thin">
                        <Image className="mr-2" src={GreenView} alt="" />
            400
                    </p>
                    <p className="flex items-center font-thin">
                        <Image className="mr-2" src={GreenShare} alt="" />
            50
                    </p>
                </div>
                <div className="flex flex-col items-center py-4">
                    <Image src={SampleImage} alt=""/>
                </div>
                <div className="px-6 text-sm">
                    <p className="font-thin">
            Time to get your gears churning because Excel 2022 and TopGear
            MERobosoccer_Excel2022
                    </p>
                </div>
            </div>
        </div>
    );
}
