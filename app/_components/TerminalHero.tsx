import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

const TerminalHero = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <Terminal>
        <TypingAnimation>pnpm dlx shadcn@latest init</TypingAnimation>
        <AnimatedSpan className="text-green-500">
          ✔ Preflight checks.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Validating Tailwind CSS.
        </AnimatedSpan>
        <TypingAnimation>
          Success! Project initialization completed.
        </TypingAnimation>
        <AnimatedSpan className="text-blue-500">
          <span>Updated 1 file:</span>
          <span className="pl-2">- lib/utils.ts</span>
        </AnimatedSpan>
        <TypingAnimation className="text-muted-foreground">
          Success! Project initialization completed.
        </TypingAnimation>
        <TypingAnimation className="text-muted-foreground">
          You may now add components.
        </TypingAnimation>
      </Terminal>
    </div>
  );
};

export default TerminalHero;
