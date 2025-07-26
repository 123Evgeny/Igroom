import HistoryIcon from "@/shared/ui/icon/HistoryIcon.svg";

export const ProfileHistory = () => (
  <div className="w-full bg-white rounded-3xl p-4 flex items-center gap-3 mb-3">
    <HistoryIcon className="w-7 h-7 text-gray-400" />
    <span className="font-normal text-[20px] leading-[25px] tracking-[-0.45px] text-black uppercase">
      ИСТОРИЯ ВСТРЕЧ
    </span>
  </div>
);
