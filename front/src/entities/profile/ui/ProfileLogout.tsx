import ExitIcon from "@/shared/ui/icon/ExitIcon.svg";

export const ProfileLogout = () => (
  <div className="w-full bg-white rounded-3xl p-4 mb-3">
    <button className="flex items-center px-[13px] gap-2 w-full font-normal text-[20px] leading-[25px] tracking-[-0.45px] text-black rounded-[25px]">
  <ExitIcon className="w-9 h-7 text-gray-400" />
  Выйти из профиля
</button>

  </div>
);
