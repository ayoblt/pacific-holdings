import { Command, CommandInput } from "@/components/ui/command";
import { cn } from "@/lib/utils";

export default function SearchInput({ className }: { className?: string }) {
  return (
    <>
      <Command
        className={cn(
          "rounded-lg border-0 w-60 h-10 flex justify-center bg-gray-100 px-4",
          className
        )}
      >
        <CommandInput
          placeholder="What are you looking for?"
          className="w-full h-full p-0 border-0"
        />
      </Command>
    </>
  );
}
