import React from "react";


type ButtonProps = {
  children: React.ReactNode;
  outlined?: boolean;
  filled?: boolean;
};

const RoundedButton: React.FC<ButtonProps> = ({
    children,
    filled,
}) => {
    const filledClass =
    "bg-gray-400/25  py-2 px-9 ring-1 ring-gray-500 rounded-full mt-4 flex justify-around items-center hover:bg-green-500/25  py-2 px-9 ring-2 ring-green-500 rounded-full mt-4 flex justify-around items-center";

    const buttonClass = `${
        (filled && filledClass) 
    }`;

    return (
        <>
            <button
                className={buttonClass}
                type="submit">
                {children}
            </button>
        </>
    );
};

export default RoundedButton;
