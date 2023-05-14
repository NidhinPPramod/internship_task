import React from "react";
import Image from "next/image";
import PlusIcon from "../../../../images/Vector.svg";

type ButtonProps = {
  children: React.ReactNode;
  outlined?: boolean;
  filled?: boolean;
  nonfilled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    children,
    outlined,
    filled,
    nonfilled,
}) => {
    const filledClass =
    "bg-green-500 text-black py-3 px-5 rounded-md mt-4 flex justify-around items-center font-bold";

    const outlinedClass =
    "bg-black text-green-500 py-3 px-5 ring-2 ring-green-500 rounded-md mt-4 flex justify-around items-center font-bold";

    const nonFilledClass =
    "text-green-500 py-3 px-5 rounded-md mt-4 flex justify-around items-center font-bold";

    const buttonClass = `${
        ((outlined && outlinedClass) ||
    (filled && filledClass) ||
    (nonfilled && nonFilledClass)) 
    }`;

    return (
        <>
            <button className={buttonClass} type="submit">
                <Image className="mr-2" src={PlusIcon} alt="" />
                {children}
            </button>
        </>
    );
};

export default Button;
