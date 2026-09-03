interface PlatformSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const platforms = [
  "Instagram",
  "Twitter / X",
  "Reddit",
  "Facebook",
  "LinkedIn",
  "Other",
];

export default function PlatformSelector({
  value,
  onChange,
}: PlatformSelectorProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        Platform
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-slate-600"
      >
        {platforms.map((platform) => (
          <option key={platform} value={platform}>
            {platform}
          </option>
        ))}
      </select>
    </div>
  );
}