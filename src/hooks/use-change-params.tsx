import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useChangeParams<T>() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  return function handleSearch(param: string, value: T) {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (value) {
      if (value instanceof Date) {
        params.set(param, value.toLocaleDateString());
      } else {
        params.set(param, String(value));
      }
    } else {
      params.delete(param);
    }
    replace(`${pathname}?${params.toString()}`);
  };
}
