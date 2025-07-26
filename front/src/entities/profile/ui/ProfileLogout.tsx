import ExitIcon from "@/shared/ui/icon/ExitIcon.svg";

export const ProfileLogout = () => (
  <div className="w-full bg-white rounded-3xl p-4 mb-3">
    <button
      type="button"
      className="flex items-center justify-center gap-3 w-full font-normal text-[20px] leading-[25px] tracking-[-0.45px] text-black rounded-[25px] h-[60px] px-6 bg-gradient-to-r from-[#fff] to-[#f3e6ff] shadow-md transition hover:from-[#f3e6ff] hover:to-[#fff] hover:shadow-lg active:scale-95 cursor-pointer select-none border border-[#A000FF]/30 group"
      tabIndex={0}
    >
      <ExitIcon className="w-8 h-8 text-[#A000FF] transition-transform duration-200 group-active:-rotate-12" />
      <span className="font-bold">Выйти из профиля</span>
    </button>
  </div>
);
