import { useChangeParams } from "@/hooks/use-change-params";
import { Search, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

function QueryFilter() {
  const handleChangeParam = useChangeParams<string>();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [inputValue, setInputValue] = useState(query || "");

  const debouncedUpdateParam = useDebouncedCallback((value: string) => {
    handleChangeParam("query", value);
  }, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    debouncedUpdateParam(value);
  };

  const handleClear = () => {
    setInputValue("");
    handleChangeParam("query", "");
  };

  return (
    <div className="flex grow items-center justify-between rounded-sm border px-4 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-black">
      <div className="flex grow items-center gap-2">
        <Search color="gray" size={18} />
        <input
          placeholder="Search companies or positions..."
          className="grow border-none placeholder:text-sm focus-visible:outline-none"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      {inputValue && (
        <button
          type="button"
          className="cursor-pointer rounded-full p-1 transition-colors hover:bg-gray-100"
          onClick={handleClear}
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}

export default QueryFilter;
