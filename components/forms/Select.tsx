interface SelectProps {
  label: string;
  error: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children?: React.ReactNode;
}

export default function Input(props: SelectProps) {
  return (
    <>
      <div>
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor={props.id}
        >
          {props.label}
        </label>
        <div className="relative">
          <select
            className={
              props.error
                ? "block appearance-none w-full bg-gray-200 border border-red-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                : "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            }
            id={props.id}
            value={props.value}
            onChange={props.onChange}
          >
            {props.children}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <p className="text-red-600 text-xs mt-1">{props.error}</p>
      </div>
    </>
  );
}
