import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

const TerminalHero = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <Terminal>
        <TypingAnimation>pnpm dlx saad@latest init</TypingAnimation>
        <AnimatedSpan className="text-green-500">
          ✔ Software-Engineer check.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Web-Developer check.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Mobile-App-Developer check.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Game-Developer check.
        </AnimatedSpan>
        <AnimatedSpan className="text-blue-500">
          <span>Updated 1 file:</span>
          <span className="pl-2">- brain/aiml.ts</span>
        </AnimatedSpan>
        <TypingAnimation className="text-muted-foreground">
          Success! talents described completed.
        </TypingAnimation>
        <TypingAnimation className="text-muted-foreground">
          You may now scroll down.
        </TypingAnimation>
      </Terminal>
    </div>
  );
};

export default TerminalHero;
