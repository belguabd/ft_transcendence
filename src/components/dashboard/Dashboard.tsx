import styles from "./Dashboard.module.css";
import Image from "next/image";
import { Component as LineChartComponent } from "@/components/charts/LineChartComponent";


export default function Dashboard() {
  return (

    <div className="h-screen w-screen p-2 flex gap-10 ">
      <aside className="w-[60px] h-full rounded-[45px] bg-sidebar flex  flex-col justify-between  items-center p-3">
        <div className="">
          <Image src="images/image_profile.svg" alt="Logo" width={46} height={46} />
        </div>
        <div className="flex flex-col gap-6">
          <Image src="images/home.svg" alt="Home icon" width={46} height={46} className="cursor-pointer" />
          <Image src="images/game.svg" alt="Game icon" width={46} height={46} className="cursor-pointer" />
          <Image src="images/chat.svg" alt="Chat icon" width={46} height={46} className="cursor-pointer" />
          <Image src="images/activity.svg" alt="Activity icon" width={46} height={46} className="cursor-pointer" />
          <Image src="images/vector.svg" alt="Vector icon" width={46} height={46} className="cursor-pointer" />
        </div>
        <div>
          <Image src="images/logout.svg" alt="Settings icon" width={25} height={25} className="cursor-pointer" />
        </div>
      </aside>
      <main className="py-7 flex w-10/12 flex-col gap-16">
        <div className="relative">
          <Image
            src="images/search.svg"
            alt="search icon"
            width={24}
            height={24}
            className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 left-6"
          />
          <input
            type="text"
            placeholder="Search anything you want..."
            className="w-[500px] h-[46px] rounded-[8px] p-6 pl-12 bg-sidebar text-white focus:outline-none text-sm  font-medium border border-[#5f2c50a3]"
          />
        </div>
        <div className={`w-[700px] bg-white h-[400px] rounded-[10px] text-white py-4 px-4 ${styles.gradient} orbitron-font flex flex-col gap-24 relative`}>
          <Image
            src={"images/character.svg"}
            alt="Character"
            width={600}
            height={669}
            className="absolute bottom-0 right-[-300px]"
          />
          <div className="py-6">
            <h2 className="font-bold text-xl px-4 ">🏓 Ping Pong Masters! 🏓</h2>
            <p className="montserrat-font font-medium px-8 py-2  max-w-[420px]">Blazing speed, fierce smashes. Only the elite reign supreme! Think you've got what it takes?</p>
          </div>
          <div className="px-4 p-4">
            <button className="py-4 px-5 bg-white text-black font-extrabold text-xl rounded-[50px] w-fit">Let's Play</button>
          </div>

        </div>
        <div className="text-white flex  gap-7" >
          <div>
            <h2 className="orbitron-font font-bold text-xl">Open Tournament</h2>
            <div className="flex gap-6 py-6">
              <div className={`${styles["gradient-tournament"]} border border-[#5f2c50a3] w-[300px] h-[150px] rounded-[10px] text-white p-4} flex flex-col  gap-4 montserrat-font`}>
                <div>
                  <h3 className="font-bold text-lg px-3 py-1">1337 tournament by Mohamed</h3>
                  <p className=" px-3 py-1 text-sm ">
                    Jun 26 - Jun 27, 2020
                  </p>
                </div>
                <div className="flex justify-end pr-3">
                  <button className="bg-[#0062FF] rounded-[50px] px-8 py-1 font-semibold">
                    Join
                  </button>
                </div>
              </div>
              <div className={`${styles["gradient-tournament"]} border border-[#5f2c50a3] w-[300px] h-[150px] rounded-[10px] text-white p-4} flex flex-col  gap-4 montserrat-font`}>
                <div>
                  <h3 className="font-bold text-lg px-3 py-1">1337 tournament by Mohamed</h3>
                  <p className=" px-3 py-1 text-sm ">
                    Jun 26 - Jun 27, 2020
                  </p>
                </div>
                <div className="flex justify-end pr-3">
                  <button className="bg-[#0062FF] rounded-[50px] px-8 py-1 font-semibold">
                    Join
                  </button>
                </div>
              </div>
              <div className={`${styles["gradient-tournament"]} border border-[#5f2c50a3] w-[300px] h-[150px] rounded-[10px] text-white p-4} flex flex-col  gap-4 montserrat-font`}>
                <div>
                  <h3 className="font-bold text-lg px-3 py-1">1337 tournament by Mohamed</h3>
                  <p className=" px-3 py-1 text-sm ">
                    Jun 26 - Jun 27, 2020
                  </p>
                </div>
                <div className="flex justify-end pr-3">
                  <button className="bg-[#0062FF] rounded-[50px] px-8 py-1 font-semibold">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="orbitron-font font-bold text-xl">Achievement</h2>
            <div className="flex py-6  cursor-pointer gap-3">
              <div className={`${styles["gradient-tournament"]} relative border border-[#5f2c50a3] w-[40px] h-[150px]  rounded-[10px]`} >
                <Image
                  src={"images/previous.svg"}
                  alt="previous icon"
                  width={9}
                  height={17}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <div className={`${styles["gradient-tournament"]} border border-[#5f2c50a3] w-[200px] h-[150px] rounded-[10px] text-white p-4} flex flex-col  gap-4 montserrat-font`}>
                <div className="flex flex-col justify-center  items-center ">
                  <Image
                    src={"images/achievement-1.svg"}
                    alt="achievement image"
                    width={98}
                    height={98}
                    className="pt-1"
                  />
                  <h3 className="font-bold ">Blazing Paddle</h3>
                </div>
              </div>
              <div className={`${styles["gradient-tournament"]} border border-[#5f2c50a3] w-[200px] h-[150px] rounded-[10px] text-white p-4} flex flex-col  gap-4 montserrat-font`}>
                <div className="flex flex-col justify-center  items-center ">
                  <Image
                    src={"images/achievement-2.svg"}
                    alt="achievement image"
                    width={98}
                    height={98}
                    className="pt-1"
                  />
                  <h3 className="font-bold ">FireSpin Pong</h3>
                </div>
              </div>
              <div className={`${styles["gradient-tournament"]} border border-[#5f2c50a3] w-[200px] h-[150px] rounded-[10px] text-white p-4} flex flex-col  gap-4 montserrat-font`}>
                <div className="flex flex-col justify-center  items-center ">
                  <Image
                    src={"images/achievement-3.svg"}
                    alt="achievement image"
                    width={98}
                    height={98}
                    className="pt-1"
                  />
                  <h3 className="font-bold ">Rapid Rally</h3>
                </div>
              </div>
              <div className={`${styles["gradient-tournament"]} relative border border-[#5f2c50a3] w-[40px] h-[150px]  rounded-[10px]`} >
                <Image
                  src={"images/next.svg"}
                  alt="next icon"
                  width={9}
                  height={17}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[45%]">
          <LineChartComponent
          />
        </div>
      </main>
    </div>


  );
}
