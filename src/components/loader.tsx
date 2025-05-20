import { LoaderCircle, LoaderPinwheel } from "lucide-react";

export default function Loader() {
  return (
    <div className="fixed z-[10] bg-transparent top-0 left-0 right-0 bottom-0 w-full h-full">
      <div className="w-full h-full flex items-center justify-center">
        <LoaderCircle className="animate-spin opacity-60" />
      </div>
    </div>
  );
}
