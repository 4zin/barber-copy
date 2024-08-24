import { InstagramIcon } from "../components/icons/Icons";
import Text from "./Text";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-black px-[33px] py-[20px] gap-3">
      <div className="flex items-center justify-center gap-8">
        <a href="https://www.instagram.com/publicimagenyc/">
          <InstagramIcon />
        </a>
        <Text
          text="234 w 27th st. | btw 7th & 8th ave."
          className="text-white text-xl font-semibold tracking-[0.6px]"
        />
        <Text
          text="new york city, ny 10001"
          className="text-white text-xl font-semibold tracking-[0.6px]"
        />
        <Text
          text="917-472-7690"
          className="text-white text-xl font-semibold tracking-[0.6px]"
        />
        <a href="mailto:manager@publicimagenyc.com">
          <Text
            text="manager@publicimagenyc.com"
            className="text-white text-xl font-semibold tracking-[0.6px] hover:text-[#1e73be]"
          />
        </a>
      </div>
      <div className="border-white border-b"></div>
      <div>
        <p className="text-white text-center text-lg">2024 public images nyc</p>
      </div>
    </footer>
  );
}
