import CheckMark from "@/shared/ui/Icon/СheckMark.svg";
import Cross from "@/shared/ui/Icon/Cross.svg";
import LabelIcon from "@/shared/ui/Icon/LabelIcon.svg";

export const ProfileLists = () => (
  <div className="w-full bg-white rounded-3xl p-4 mb-3">
    <div className="flex items-center gap-3 mb-3">
      <CheckMark className="w-7 h-7 text-gray-400" />
      <span className="font-normal text-[20px] leading-[25px] tracking-[-0.45px] text-black">
        Мои подписки
      </span>
    </div>
    <hr className="my-2 border-gray-200" />
    <div className="flex items-center gap-3 mb-3">
      <Cross className="w-7 h-7 text-gray-400" />
      <span className="font-normal text-[20px] leading-[25px] tracking-[-0.45px] text-black">
        Черный список
      </span>
    </div>
    <hr className="my-2 border-gray-200" />
    <div className="flex items-center gap-3">
      <LabelIcon className="w-7 h-7 text-gray-400" />
      <span className="font-normal text-[20px] leading-[25px] tracking-[-0.45px] text-black">
        Закладки
      </span>
    </div>
  </div>
);
