import { ChangeEvent, FC, memo } from "react";

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export const Header: FC<Props> = memo(({ value, onChange, onClear }) => {
  return (
    <header className="Header">
      <input
        className="Input"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
      <button
        disabled={!value.length}
        className={`Close__Button Close__Button--${!!value.length}`}
        onClick={onClear}
      >
        X
      </button>
    </header>
  );
});
