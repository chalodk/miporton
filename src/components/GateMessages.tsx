import { GateMessageDemo } from "@/components/GateMessageDemo";

export function GateMessages() {
  return (
    <section
      id="mensajes"
      className="scroll-mt-8 border-b border-[var(--color-border)] bg-[var(--color-bg-deep)]"
      style={{ paddingBlock: "var(--space-section)" }}
    >
      <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8">
        <GateMessageDemo />
      </div>
    </section>
  );
}
