import OpenEye from "@/shared/ui/Icon/OpenEye.svg";
import AgeIcon from "@/shared/ui/Icon/AgeIcon.svg";

export const ProfilePrivacy = () => (
  <div className="w-full bg-white rounded-3xl p-4 mb-3">
    <div className="flex items-center gap-3 mb-3">
      <OpenEye className="w-9 h-7 text-gray-400" />
      <span className="font-normal text-[20px] leading-[25px] tracking-[-0.45px] text-black">
  Публичный аккаунт
</span>
    </div>
    <hr className="my-2 border-gray-200" />
    <div className="flex items-center gap-4">
      <AgeIcon className="w-7 h-7 text-gray-400" />
      <span className="font-normal text-[20px] leading-[25px] tracking-[-0.45px] text-black">
        Взрослый</span>
    </div>
  </div>
);
