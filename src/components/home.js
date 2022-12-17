import React, { useState } from "react";
import Nav from "./navbar";
import { useNavigate } from "react-router";
import bg3 from "../assets/bg/bg3.jpg";


function Home() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate(code?`/room/${code}`:"/");
  };

  return (
    <div className="w-[100vw] h-[100vh] fixed">
      <div>
        <Nav />
      </div>
      <div
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundSize: "cover",
          height: "100%",
          width: "100vw",
          display: "flex",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        

          <form
            className="bg-black/50 flex flex-col items-center gap-6 mb-20 justify-center pb-10 rounded-[1rem] w-[80vw]  md:w-[30vw] lg:w-[30vw] xl:w-[20vw] h-[40vh] "
            onSubmit={submit}
          >
            <div className="">
              <label className="text-[30px] font-bold text-white">
                Enter The Room
              </label>
            </div>
            <div className="">
              <input
                type="text"
                className="px-4 h-[35px] rounded-[0.3rem] font-semibold outline-none"
                placeholder="Enter Room Code "
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </div>
            <div className="bg-white/60 rounded-[0.3rem] flex justify-center items-center w-[100px] mt-20">
              <button className="font-bold w-[100px]">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
   
  );
}

export default Home;
