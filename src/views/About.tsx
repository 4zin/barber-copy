import PageTitle from "../components/PageTitle";
import Text from "../components/Text";

export default function About() {
  return (
    <section className="bg-[url('/About-us-bg.webp')] bg-fixed bg-center bg-cover flex justify-center items-center min-h-screen py-10">
      <div className="flex items-center gap-4 w-[70%] mt-[100px]">
        <div className="flex flex-col gap-4 w-[80%]">
          <img src="/about-us-1.webp" alt="" loading="lazy" />
          <img src="/about-us-2.webp" alt="" loading="lazy" />
        </div>

        <div className="flex flex-col gap-4 w-[80%]">
          <Text
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            className="text-white text-[15px] font-normal tracking-[0.85px]"
          />
          <Text
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            className="text-white text-[15px] font-normal tracking-[0.85px]"
          />
          <img src="/about-us-3.webp" alt="" loading="lazy" />
          <Text
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            className="text-white text-[15px] font-normal tracking-[0.85px]"
          />
          <Text
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            className="text-white text-[15px] font-normal tracking-[0.85px]"
          />
        </div>
      </div>
      <PageTitle text="about us" />
    </section>
  );
}
