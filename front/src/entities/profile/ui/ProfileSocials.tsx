interface Social {
  type: string;
  label: string;
  value: string;
  url: string;
}

interface ProfileSocialsProps {
  socials: Social[];
}

export function ProfileSocials({ socials }: ProfileSocialsProps) {
  return (
    <section className="mt-4 flex gap-4">
      {socials.map((s) => (
        <a
          key={s.type}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-3 py-1 rounded bg-gray-100 hover:bg-blue-100 text-sm text-blue-700 transition"
        >
          {/* Здесь можно добавить иконку соцсети */}
          <span>{s.label}</span>
        </a>
      ))}
    </section>
  );
}
