interface InputProps {
  placeholder?: string;
  onChange?: () => void;
}

export function Input({ onChange, placeholder }: InputProps) {
  return <div>
    <input type="text" onChange={onChange} className="px-4 py-2 m-2 border rounded" placeholder= {placeholder} />
  </div>
}