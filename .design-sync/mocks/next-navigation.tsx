export function usePathname(): string {
  return "/";
}

export function useRouter() {
  return {
    push: (_url: string) => {},
    replace: (_url: string) => {},
    back: () => {},
    forward: () => {},
    refresh: () => {},
    prefetch: (_url: string) => {},
  };
}

export function useParams(): Record<string, string | string[]> {
  return {};
}

export function useSearchParams() {
  return new URLSearchParams();
}
