interface PostInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PostInput({
  value,
  onChange,
}: PostInputProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-sm font-medium text-slate-300">
          Your post
        </label>

        <span className="text-xs text-slate-500">
          {value.length} characters
        </span>
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your social media post here..."
        rows={8}
        className="w-full resize-none rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-slate-600"
      />

      <p className="mt-2 text-xs text-slate-500">
        AMIPO will analyze linguistic and stylistic characteristics
        that may contribute to identity leakage.
      </p>
    </div>
  );
}