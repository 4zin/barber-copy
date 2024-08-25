import { BookButton } from "../components/Buttons";
import PageTitle from "../components/PageTitle";
import Text from "../components/Text";

export default function Services() {
  return (
    <section className="h-screen bg-[url('/services-banner-desktop.webp')] bg-center bg-cover min-h-screen py-10 flex flex-col items-center justify-center">
      <div className="flex w-4/5 justify-between mt-20">
        <div className="w-2/5 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <Text
                text="short haircut"
                className="text-white text-[27px] font-bold  tracking-[1.85px]"
              />
              <Text
                text="generally anything above shoulders"
                className="text-white text-[13px] font-light tracking-[0.85px]"
              />
            </div>
            <div>
              <Text
                text="$70"
                className="text-white text-[22px] font-semibold tracking-[0.25px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Text
                text="long haircut"
                className="text-white text-[27px] font-bold  tracking-[1.85px]"
              />
              <Text
                text="hair at shoulders or below"
                className="text-white text-[13px] font-light tracking-[0.85px]"
              />
            </div>
            <div>
              <Text
                text="$115 and up"
                className="text-white text-[22px] font-semibold tracking-[0.25px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Text
                text="buzz cut"
                className="text-white text-[27px] font-bold  tracking-[1.85px]"
              />
              <Text
                text="one clipper guard length all over"
                className="text-white text-[13px] font-light tracking-[0.85px]"
              />
            </div>
            <div>
              <Text
                text="$30 and up"
                className="text-white text-[22px] font-semibold tracking-[0.25px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Text
                text="beard trim"
                className="text-white text-[27px] font-bold  tracking-[1.85px]"
              />
            </div>
            <div>
              <Text
                text="$25 and up"
                className="text-white text-[22px] font-semibold tracking-[0.25px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Text
                text="medim length"
                className="text-white text-[27px] font-bold  tracking-[1.85px]"
              />
              <Text
                text="cut (applies to stylist liz only)"
                className="text-white text-[13px] font-light tracking-[0.85px]"
              />
            </div>
            <div>
              <Text
                text="$110"
                className="text-white text-[22px] font-semibold tracking-[0.25px]"
              />
            </div>
          </div>
        </div>

        <div className="w-[37%] flex flex-col gap-6 h-80">
          <div className="flex items-center justify-between">
            <div>
              <Text
                text="blow dry"
                className="text-white text-[27px] font-bold  tracking-[1.85px]"
              />
            </div>
            <div>
              <Text
                text="$80"
                className="text-white text-[22px] font-semibold tracking-[0.25px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Text
                text="brazilian blowout"
                className="text-white text-[27px] font-bold  tracking-[1.85px]"
              />
            </div>
            <div>
              <Text
                text="$300"
                className="text-white text-[22px] font-semibold tracking-[0.25px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Text
                text="color"
                className="text-white text-[27px] font-bold  tracking-[1.85px]"
              />
              <Text
                text="one process color all over"
                className="text-white text-[13px] font-light tracking-[0.85px]"
              />
            </div>
            <div>
              <Text
                text="$115"
                className="text-white text-[22px] font-semibold tracking-[0.25px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Text
                text="partial highlight"
                className="text-white text-[27px] font-bold  tracking-[1.85px]"
              />
            </div>
            <div>
              <Text
                text="$205"
                className="text-white text-[22px] font-semibold tracking-[0.25px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Text
                text="full highlight"
                className="text-white text-[27px] font-bold  tracking-[1.85px]"
              />
            </div>
            <div>
              <Text
                text="$230"
                className="text-white text-[22px] font-semibold tracking-[0.25px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Text
                text="bleach and tone"
                className="text-white text-[27px] font-bold  tracking-[1.85px]"
              />
            </div>
            <div>
              <Text
                text="$175"
                className="text-white text-[22px] font-semibold tracking-[0.25px]"
              />
            </div>
          </div>
        </div>
      </div>
      <BookButton />
      <PageTitle text="services" />
    </section>
  );
}
