import styles from "./Dashboard.module.css";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div className="h-screen p-2">
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
    </div>
  );
}
