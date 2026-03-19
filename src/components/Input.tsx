interface InputProps {
  placeholder?: string; 
  ref?: any;
}

export function Input({ placeholder, ref }: InputProps) {
  return <div>
    <input type="text" ref={ref}  className="px-4 py-2 m-2 border rounded" placeholder= {placeholder} />
  </div>
}