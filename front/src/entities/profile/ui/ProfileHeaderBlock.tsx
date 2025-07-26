import ArrowLeftIcon from "@/shared/ui/icon/ArrowLeft.svg";
import { useRouter } from "next/navigation";
import ArrowUpload from "@/shared/ui/icon/ArrowUpload.svg";
import IconEye from "@/shared/ui/icon/IconEye.svg";
import SmileCat from "@/shared/ui/icon/SmileCat.svg";
import Image from "next/image";

export const ProfileHeaderBlock = () => {
  const router = useRouter();
  return (
    <div className="flex w-full h-full items-start gap-2">
      <div className="w-full flex flex-[1] justify-start">
        <button
          className="text-2xl text-gray-400 cursor-pointer transition active:scale-90 rounded-full p-1 group"
          onClick={() => router.back()}
          aria-label="Назад"
          tabIndex={0}
        >
          <ArrowLeftIcon className="w-10 h-10 group-active:-translate-x-1 group-hover:text-[#A000FF] transition" />
        </button>
      </div>
      {/* Центр: аватар */}
      <div className="flex-[2] flex justify-center relative">
        <span
          className="absolute flex items-center justify-center bg-green-500 text-black rounded-full text-xl font-bold"
          style={{
            width: "39.375px",
            height: "39.375px",
            left: "calc(50% - 90px)",
            zIndex: 2,
          }}
        >
          P
        </span>
        <div className="w-[180px] h-[180px] rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
          <Image
            src="/Avatar/1.png"
            alt="Аватарка"
            width={180}
            height={180}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
      <div className="flex flex-[1] justify-center  flex-col gap-4">
        <div className="flex items-center justify-center  ">
          <ArrowUpload className="w-7 h-11 flex items-center text-gray-400" />
        </div>
        <div className="flex-[2] flex flex-col items-center ">
          <IconEye className="w-9 h-6 flex items-center text-gray-400" />
          <span className="text-[16px] leading-[21px] font-normal text-center tracking-[-0.31px] text-[#A7A7A7]">
            Это я
          </span>
        </div>
        <div className="flex-[1] flex flex-col items-center  ">
          <SmileCat className="w-8 h-8 flex items-center text-gray-400" />
          <span className="text-[16px] leading-[21px] font-normal text-center tracking-[-0.31px] text-[#A7A7A7]">
            Котум
          </span>
        </div>
      </div>
    </div>
  );
};
