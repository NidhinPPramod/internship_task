import React from "react";

function page() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <main className="h-[670px] w-[550px] bg-faded-gray ">
                <h1 className="text-5xl font-extrabold px-20 py-24">Login</h1>
                <div className="flex flex-col gap-4 mx-20">
                    <label htmlFor="username" className="font-thin">UserName</label>
                    <input id="username" className="py-3 px-3 bg-[#121212] text-gray-500" placeholder="Name"/>
                    <label htmlFor="password" className="font-thin">Password</label>
                    <input id="password" className="py-3 px-3 bg-[#121212] text-gray-500" placeholder="Password"/>
                </div>
                <button className="bg-green-600 text-black py-3 px-14 rounded-md mt-11 ml-[300px] flex justify-around items-center font-bold ">LOGIN</button>
                <p className="text-green-600 ml-[325px] mt-4 font-">Forgot Password?</p>
            </main>
        </div>
    );
}

export default page;
