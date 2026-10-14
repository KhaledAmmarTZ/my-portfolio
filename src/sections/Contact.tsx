"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import RightSidebar from "@/components/RightSidebar";

const CONFIG = {
  firstName: "Khaled",
  email: "khaledammartz@gmail.com",
  whatsapp: "+999999999",
  isAvailable: false,
  replyTime: "2 days",
};

/* -------------------------------------------------------------------------- */
/*  Content                                                                   */
/* -------------------------------------------------------------------------- */

const TOPICS = [
  {
    id: "project",
    label: "A project",
    subject: "Project inquiry",
    placeholder: "What are you building, and what do you need from me?",
    askTiming: true,
  },
  {
    id: "role",
    label: "A full-time role",
    subject: "Full-time opportunity",
    placeholder: "Tell me about the team and the role.",
    askTiming: true,
  },
  {
    id: "collab",
    label: "A collaboration",
    subject: "Collaboration",
    placeholder: "What's the idea, and where could I help?",
    askTiming: false,
  },
  {
    id: "hello",
    label: "Something else",
    subject: "Hello",
    placeholder: "What's on your mind?",
    askTiming: false,
  },
] as const;

const TIMINGS = [
  "As soon as possible",
  "In the next few months",
  "No rush",
];

const METHODS = [
  { id: "email", label: "Email" },
  { id: "whatsapp", label: "WhatsApp" },
] as const;

type TopicId = (typeof TOPICS)[number]["id"];
type MethodId = (typeof METHODS)[number]["id"];

type StepId =
  | "name"
  | "topic"
  | "timing"
  | "message"
  | "method"
  | "contact"
  | "review"
  | "sent";

type Answers = {
  name?: string;
  topic?: TopicId;
  timing?: string;
  message?: string;
  method?: MethodId;
  contact?: string;
};

export type ContactData = {
  name: string;
  topic: string;
  timing: string | null;
  message: string;
  replyVia: MethodId;
  replyTo: string;
};

const NEXT: Partial<Record<StepId, StepId>> = {
  name: "topic",
  timing: "message",
  message: "method",
  contact: "review",
};

const stepsFor = (topicId?: TopicId): StepId[] => {
  const topic = TOPICS.find((item) => item.id === topicId);

  return [
    "name",
    "topic",
    ...(topic?.askTiming ? (["timing"] as StepId[]) : []),
    "message",
    "method",
    "contact",
    "review",
  ];
};

/* -------------------------------------------------------------------------- */
/*  Theme tokens                                                              */
/* -------------------------------------------------------------------------- */

const DARK_TOKENS = `
  --cc-bg: #0b0b0f;
  --cc-panel: #101116;
  --cc-bubble: #1b1c22;
  --cc-field: #0b0b0f;
  --cc-ink: #ffffff;
  --cc-muted: #a1a1aa;
  --cc-placeholder: #8a8a93;
  --cc-line: rgba(255, 255, 255, 0.12);
  --cc-line-strong: rgba(255, 255, 255, 0.3);
  --cc-accent: #d4af37;
  --cc-accent-hover: #e6c65a;
  --cc-on-accent: #0b0b0f;
  --cc-accent-text: #d4af37;
  --cc-accent-line: #d4af37;
  --cc-accent-wash: rgba(212, 175, 55, 0.12);
  --cc-error: #ff8a80;
  --cc-ring: #ffffff;
`;

const THEME_CSS = `
.cc {
  --cc-bg: #f7f5f0;
  --cc-panel: #ffffff;
  --cc-bubble: #efece4;
  --cc-field: #f7f5f0;
  --cc-ink: #16161a;
  --cc-muted: #5b5b63;
  --cc-placeholder: #6e6e76;
  --cc-line: #ddd8cc;
  --cc-line-strong: #8f897c;
  --cc-accent: #d4af37;
  --cc-accent-hover: #e6c65a;
  --cc-on-accent: #0b0b0f;
  --cc-accent-text: #7a5c00;
  --cc-accent-line: #a67f12;
  --cc-accent-wash: rgba(166, 127, 18, 0.12);
  --cc-error: #b42318;
  --cc-ring: #16161a;
}

@media (prefers-color-scheme: dark) {
  .cc[data-theme="system"]:not(:is(.light, [data-theme="light"]) *) {
    ${DARK_TOKENS}
  }
}

.dark .cc[data-theme="system"],
[data-theme="dark"] .cc[data-theme="system"],
.cc[data-theme="dark"] {
  ${DARK_TOKENS}
}
`;

/* -------------------------------------------------------------------------- */
/*  Shared styles                                                             */
/* -------------------------------------------------------------------------- */

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--cc-ring)]";

const bubbleBase =
  "max-w-[88%] whitespace-pre-wrap break-words px-4 py-3 text-base leading-7";

const khaledBubble =
  `${bubbleBase} self-start rounded-2xl rounded-bl-md border ` +
  "border-[color:var(--cc-line)] bg-[color:var(--cc-bubble)] text-[color:var(--cc-ink)]";

const chip =
  "inline-flex items-center rounded-full border border-[color:var(--cc-line-strong)] " +
  "px-4 py-2 text-base text-[color:var(--cc-ink)] transition " +
  "hover:border-[color:var(--cc-accent-line)] " +
  "hover:bg-[color:var(--cc-accent-wash)] active:scale-95 " +
  focusRing;

const composerInput =
  "min-w-0 flex-1 rounded-3xl border border-[color:var(--cc-line-strong)] " +
  "bg-[color:var(--cc-field)] px-5 text-base text-[color:var(--cc-ink)] " +
  "outline-none transition-colors placeholder:text-[color:var(--cc-placeholder)] " +
  "hover:border-[color:var(--cc-muted)] " +
  "focus:border-[color:var(--cc-accent-line)] " +
  "aria-[invalid=true]:border-[color:var(--cc-error)]";

const sendButton =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full " +
  "bg-[color:var(--cc-accent)] text-[color:var(--cc-on-accent)] transition " +
  "hover:bg-[color:var(--cc-accent-hover)] active:scale-90 " +
  focusRing;

const pillSm =
  "inline-flex items-center rounded-full border px-3.5 py-1.5 " +
  "text-sm font-medium transition active:scale-95 " +
  focusRing;

/* -------------------------------------------------------------------------- */
/*  Small pieces                                                              */
/* -------------------------------------------------------------------------- */

function CopyButton({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // The value remains visible for manual copying.
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className={
          `${pillSm} border-(--cc-line-strong) ` +
          "text-(--cc-ink) hover:border-(--cc-muted)"
        }
      >
        {copied ? "Copied" : "Copy"}
        <span className="sr-only"> {label}</span>
      </button>

      <span className="sr-only" aria-live="polite">
        {copied ? `${label} copied` : ""}
      </span>
    </>
  );
}

function Channel({
  label,
  value,
  href,
  actionLabel,
  external,
}: {
  label: string;
  value: string;
  href: string;
  actionLabel: string;
  external?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="min-w-0">
        <p className="text-sm text-(--cc-muted)">{label}</p>
        <p className="break-all text-lg text-(--cc-ink)">
          {value}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <a
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={
            `${pillSm} border-(--cc-accent-line) ` +
            "text-(--cc-accent-text) " +
            "hover:border-(--cc-accent-line) " +
            "hover:bg-(--cc-accent-wash)"
          }
        >
          {actionLabel}
        </a>

        <CopyButton value={value} label={label} />
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div
      className={`${khaledBubble} flex items-center gap-1.5 py-4`}
      role="status"
    >
      <span className="sr-only">
        {CONFIG.firstName} is typing
      </span>

      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          aria-hidden="true"
          style={{ animationDelay: `${delay}ms` }}
          className="h-2 w-2 animate-bounce rounded-full bg-(--cc-muted) motion-reduce:animate-none"
        />
      ))}
    </div>
  );
}

function AnswerBubble({
  children,
  onEdit,
  showEdit,
  disabled,
}: {
  children: ReactNode;
  onEdit: () => void;
  showEdit: boolean;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onEdit}
      disabled={disabled}
      className={
        `group ${bubbleBase} self-end rounded-2xl rounded-br-md ` +
        "bg-(--cc-accent) text-left " +
        "text-(--cc-on-accent) transition " +
        "hover:bg-(--cc-accent-hover) active:scale-[0.98] " +
        "disabled:cursor-default disabled:hover:bg-(--cc-accent) " +
        "disabled:active:scale-100 " +
        focusRing
      }
    >
      <span className="sr-only">
        Your answer, tap to change:{" "}
      </span>

      {children}

      <span
        aria-hidden="true"
        className={
          `mt-1 block text-xs font-medium ` +
          "text-(--cc-on-accent) transition-opacity " +
          "group-hover:opacity-100 group-focus-visible:opacity-100 " +
          (showEdit ? "opacity-100" : "opacity-0")
        }
      >
        Edit
      </span>
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export default function ContactChat({
  onSubmit,
  theme = "system",
}: {
  theme?: "system" | "light" | "dark";
  onSubmit?: (data: ContactData) => Promise<void> | void;
}) {
  const { isAvailable, firstName } = CONFIG;

  const [step, setStep] = useState<StepId>("name");
  const [answers, setAnswers] = useState<Answers>({});
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(true);
  const [editing, setEditing] = useState(false);
  const [composerError, setComposerError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "error">(
    "idle"
  );

  const logRef = useRef<HTMLDivElement>(null);
  const composerRef = useRef<HTMLDivElement>(null);
  const interacted = useRef(false);

  const topic = TOPICS.find((item) => item.id === answers.topic);
  const order = stepsFor(answers.topic);
  const idx = step === "sent" ? order.length : order.indexOf(step);
  const visible = order.slice(0, idx + 1);
  const whatsappDigits = CONFIG.whatsapp.replace(/\D/g, "");

  const reducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Typing pause before each question */

  useEffect(() => {
    if (!typing) return;

    const timer = window.setTimeout(
      () => setTyping(false),
      reducedMotion() ? 0 : 450
    );

    return () => window.clearTimeout(timer);
  }, [typing, step]);

  /* Keep the newest message in view */

  useEffect(() => {
    const element = logRef.current;

    if (element) {
      element.scrollTo({
        top: element.scrollHeight,
        behavior: reducedMotion() ? "auto" : "smooth",
      });
    }
  }, [step, typing, status, answers]);

  /* Move focus into the composer */

  useEffect(() => {
    if (typing || !interacted.current) return;

    composerRef.current
      ?.querySelector<HTMLElement>("input, textarea, button")
      ?.focus({ preventScroll: true });
  }, [typing, step]);

  /* ------------------------------------------------------------------------ */
  /*  Helpers                                                                 */
  /* ------------------------------------------------------------------------ */

  const draftFor = (id: StepId, currentAnswers: Answers): string => {
    if (id === "name") return currentAnswers.name ?? "";
    if (id === "message") return currentAnswers.message ?? "";
    if (id === "contact") return currentAnswers.contact ?? "";
    return "";
  };

  const goTo = (
    id: StepId,
    currentAnswers: Answers,
    edit = false
  ) => {
    interacted.current = true;
    setEditing(edit);
    setStep(id);
    setTyping(true);
    setDraft(draftFor(id, currentAnswers));
    setComposerError(null);
  };

  const question = (currentStep: StepId): string => {
    switch (currentStep) {
      case "name":
        return `Hi, I'm ${firstName}. What should I call you?`;

      case "topic":
        return `Nice to meet you, ${answers.name}. What brings you here?`;

      case "timing":
        return "When would you like to start? You can skip this.";

      case "message":
        return "Tell me a bit more about it.";

      case "method":
        return "How should I reply?";

      case "contact":
        return answers.method === "email"
          ? "What's your email address?"
          : "What's your WhatsApp number? Include the country code.";

      case "review":
        if (step === "sent") return "Here's what you sent.";

        return (
          "Here's what I'll receive. Tap any of your answers to change it, " +
          "or send it when it looks right." +
          (CONFIG.replyTime
            ? ` I usually reply within ${CONFIG.replyTime}.`
            : "")
        );

      default:
        return "";
    }
  };

  const answerText = (currentStep: StepId): string => {
    switch (currentStep) {
      case "name":
        return answers.name ?? "";

      case "topic":
        return topic?.label ?? "";

      case "timing":
        return answers.timing || "Skip for now";

      case "message":
        return answers.message ?? "";

      case "method":
        return METHODS.find((item) => item.id === answers.method)?.label ?? "";

      case "contact":
        return answers.contact ?? "";

      default:
        return "";
    }
  };

  /* ------------------------------------------------------------------------ */
  /*  Flow                                                                     */
  /* ------------------------------------------------------------------------ */

  const submitAnswer = (id: StepId, value: string) => {
    const next = { ...answers, [id]: value } as Answers;

    let to: StepId;
    let keepEditing = false;

    if (id === "topic") {
      const selectedTopic = TOPICS.find((item) => item.id === value)!;

      if (!selectedTopic.askTiming) {
        delete next.timing;
      }

      if (editing) {
        if (
          selectedTopic.askTiming &&
          next.timing === undefined
        ) {
          to = "timing";
          keepEditing = true;
        } else {
          to = "review";
        }
      } else {
        to = selectedTopic.askTiming ? "timing" : "message";
      }
    } else if (id === "method") {
      const changed = answers.method !== value;

      if (changed) {
        delete next.contact;
      }

      if (editing && !changed) {
        to = "review";
      } else {
        to = "contact";
        keepEditing = editing;
      }
    } else if (editing) {
      to = "review";
    } else {
      to = NEXT[id]!;
    }

    setAnswers(next);
    goTo(to, next, keepEditing);
  };

  const submitDraft = () => {
    const value = draft.trim();
    let error: string | null = null;

    if (step === "name" && !value) {
      error = "Tell me your name.";
    }

    if (step === "message" && value.length < 10) {
      error = "Add a few words so I know how to help.";
    }

    if (step === "contact") {
      if (answers.method === "email") {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
          error = "Enter a valid email address, like you@email.com.";
        }
      } else if (value.replace(/\D/g, "").length < 7) {
        error = "Enter your number with country code, like +1 555 0100.";
      }
    }

    if (error) {
      setComposerError(error);
      return;
    }

    submitAnswer(step, value);
  };

  const startEdit = (currentStep: StepId) => {
    goTo(currentStep, answers, true);
  };

  const send = async () => {
    const data: ContactData = {
      name: answers.name!,
      topic: topic!.subject,
      timing:
        topic!.askTiming && answers.timing
          ? answers.timing
          : null,
      message: answers.message!,
      replyVia: answers.method!,
      replyTo: answers.contact!,
    };

    setStatus("sending");

    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        const body =
          `${data.message}\n\n` +
          (data.timing ? `Timing: ${data.timing}\n` : "") +
          `Reply via ${
            data.replyVia === "email" ? "email" : "WhatsApp"
          }: ${data.replyTo}\n` +
          `— ${data.name}`;

        window.location.href =
          `mailto:${CONFIG.email}` +
          `?subject=${encodeURIComponent(`${data.topic} — ${data.name}`)}` +
          `&body=${encodeURIComponent(body)}`;
      }

      setStatus("idle");
      goTo("sent", answers);
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setAnswers({});
    setStatus("idle");
    goTo("name", {});
  };

  /* ------------------------------------------------------------------------ */
  /*  Render pieces                                                            */
  /* ------------------------------------------------------------------------ */

  const Summary = () => (
    <dl className="grid max-w-[92%] grid-cols-[5.5rem_minmax(0,1fr)] gap-x-4 gap-y-3 self-start rounded-2xl border border-(--cc-line) bg-(--cc-bubble) p-4 text-sm leading-6">
      <dt className="text-(--cc-muted)">Name</dt>
      <dd className="wrap-break-word text-(--cc-ink)">
        {answers.name}
      </dd>

      <dt className="text-(--cc-muted)">About</dt>
      <dd className="text-(--cc-ink)">
        {topic?.label}
      </dd>

      {topic?.askTiming && answers.timing && (
        <>
          <dt className="text-(--cc-muted)">Start</dt>
          <dd className="text-(--cc-ink)">
            {answers.timing}
          </dd>
        </>
      )}

      <dt className="text-(--cc-muted)">Message</dt>
      <dd className="whitespace-pre-wrap wrap-break-word text-(--cc-ink)">
        {answers.message}
      </dd>

      <dt className="text-(--cc-muted)">Reply via</dt>
      <dd className="break-all text-(--cc-ink)">
        {METHODS.find((item) => item.id === answers.method)?.label}:{" "}
        {answers.contact}
      </dd>
    </dl>
  );

  const inputLabel =
    step === "name"
      ? "Your name"
      : step === "message"
        ? "Your message"
        : answers.method === "email"
          ? "Your email address"
          : "Your WhatsApp number";

  const TextComposer = () => (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        submitDraft();
      }}
    >
      <div className="flex items-end gap-2">
        {step === "message" ? (
          <textarea
            id="chat-input"
            aria-label={inputLabel}
            rows={3}
            value={draft}
            placeholder={topic?.placeholder}
            onChange={(event) => {
              setDraft(event.target.value);
              setComposerError(null);
            }}
            onKeyDown={(event) => {
              if (
                event.key === "Enter" &&
                (event.metaKey || event.ctrlKey)
              ) {
                event.preventDefault();
                submitDraft();
              }
            }}
            aria-invalid={!!composerError}
            aria-describedby={
              composerError ? "chat-err" : undefined
            }
            className={`${composerInput} resize-none py-3 leading-7`}
          />
        ) : (
          <input
            id="chat-input"
            aria-label={inputLabel}
            type={
              step === "contact"
                ? answers.method === "email"
                  ? "email"
                  : "tel"
                : "text"
            }
            inputMode={
              step === "contact"
                ? answers.method === "email"
                  ? "email"
                  : "tel"
                : undefined
            }
            autoComplete={
              step === "name"
                ? "name"
                : answers.method === "email"
                  ? "email"
                  : "tel"
            }
            value={draft}
            placeholder={
              step === "name"
                ? "Your name"
                : answers.method === "email"
                  ? "you@email.com"
                  : "+1 555 0100"
            }
            onChange={(event) => {
              setDraft(event.target.value);
              setComposerError(null);
            }}
            aria-invalid={!!composerError}
            aria-describedby={
              composerError ? "chat-err" : undefined
            }
            className={`${composerInput} h-12`}
          />
        )}

        <button
          type="submit"
          className={sendButton}
          aria-label="Send answer"
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 15V3M3.5 8.5 9 3l5.5 5.5" />
          </svg>
        </button>
      </div>

      {step === "message" && (
        <p className="mt-2 px-2 text-xs text-(--cc-muted)">
          Press Ctrl or ⌘ + Enter to send
        </p>
      )}

      {composerError && (
        <p
          id="chat-err"
          role="alert"
          className="mt-2 px-2 text-sm text-(--cc-error)"
        >
          {composerError}
        </p>
      )}
    </form>
  );

  const composer = () => {
    switch (step) {
      case "topic":
        return (
          <div className="flex flex-wrap gap-2">
            {TOPICS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={chip}
                onClick={() => submitAnswer("topic", item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        );

      case "timing":
        return (
          <div className="flex flex-wrap gap-2">
            {TIMINGS.map((item) => (
              <button
                key={item}
                type="button"
                className={chip}
                onClick={() => submitAnswer("timing", item)}
              >
                {item}
              </button>
            ))}

            <button
              type="button"
              className={`${chip} border-dashed`}
              onClick={() => submitAnswer("timing", "")}
            >
              Skip
            </button>
          </div>
        );

      case "method":
        return (
          <div className="flex flex-wrap gap-2">
            {METHODS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={chip}
                onClick={() => submitAnswer("method", item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        );

      case "review":
        return (
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={send}
              disabled={status === "sending"}
              className={
                "group inline-flex h-12 items-center gap-3 rounded-full " +
                "bg-(--cc-accent) px-7 text-base font-medium " +
                "text-(--cc-on-accent) transition " +
                "hover:bg-(--cc-accent-hover) " +
                "active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 " +
                focusRing
              }
            >
              {status === "sending" ? "Sending…" : "Send message"}

              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
              >
                <path d="M3 9h12M10 4l5 5-5 5" />
              </svg>
            </button>

            <button
              type="button"
              onClick={reset}
              className={
                `${pillSm} h-12 border-(--cc-line-strong) ` +
                "px-5 text-base text-(--cc-ink) " +
                "hover:border-(--cc-muted)"
              }
            >
              Start over
            </button>

            {status === "error" && (
              <p
                role="alert"
                className="w-full px-1 text-sm text-(--cc-error)"
              >
                That didn&apos;t send. Try again, or use the email or
                WhatsApp buttons beside the chat.
              </p>
            )}
          </div>
        );

      case "sent":
        return (
          <button
            type="button"
            onClick={reset}
            className={chip}
          >
            Write another message
          </button>
        );

      default:
        return TextComposer();
    }
  };

  /* ------------------------------------------------------------------------ */
  /*  Main layout                                                              */
  /* ------------------------------------------------------------------------ */

  return (
    <section
      id="contact"
      className="cc w-full bg-(--cc-bg) py-20 sm:py-28"
      data-theme={theme}
    >
      <style>{THEME_CSS}</style>

      {/* Full-width responsive container */}
      <div className="mx-auto grid w-full max-w-none gap-x-16 gap-y-12 px-4 sm:px-8 md:px-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:grid-rows-[auto_1fr] lg:px-16 xl:px-20">

        {/* ================= HEADING ================= */}
        <header className="w-full min-w-0 lg:col-start-1 lg:row-start-1">

          {/* Gold section label */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D4AF37]" />

            <span className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl font-medium tracking-tight text-(--cc-ink) sm:text-5xl">
            Message me, one question at a time.
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-(--cc-muted)">
            {isAvailable
              ? "A few short questions, and you can change any answer before you send."
              : "I'm not taking on new work right now, but you're welcome to write. A few short questions, and you can change any answer before you send."}
          </p>
        </header>

        {/* ================= CHAT WINDOW ================= */}
        <div className="flex h-144 min-w-0 flex-col overflow-hidden rounded-3xl border border-(--cc-line) bg-(--cc-panel) lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-160">

          {/* Chat header */}
          <div className="flex items-center gap-3 border-b border-(--cc-line) px-5 py-4">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-(--cc-accent) text-lg font-medium text-(--cc-on-accent)"
            >
              {firstName[0]}
            </span>

            <div>
              <p className="text-base font-medium leading-tight text-(--cc-ink)">
                {firstName}
              </p>

              <p
                role="status"
                className="mt-0.5 flex items-center gap-2 text-sm text-(--cc-muted)"
              >
                <span
                  aria-hidden="true"
                  className={
                    `h-2 w-2 rounded-full ${
                      isAvailable
                        ? "bg-(--cc-accent)"
                        : "border-2 border-(--cc-muted)"
                    }`
                  }
                />

                {isAvailable
                  ? "Open to new work"
                  : "Not taking new work right now"}
              </p>
            </div>
          </div>

          {/* Conversation log */}
          <div
            ref={logRef}
            role="log"
            aria-live="polite"
            aria-label="Conversation"
            className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-5 sm:px-6"
          >
            {visible.map((currentStep, index) => {
              const isCurrent = index === idx;

              return (
                <div
                  key={currentStep}
                  className="flex flex-col gap-3"
                >
                  {isCurrent && typing ? (
                    <TypingDots />
                  ) : (
                    <p className={khaledBubble}>
                      {question(currentStep)}
                    </p>
                  )}

                  {currentStep === "review" &&
                    !(isCurrent && typing) &&
                    Summary()}

                  {!isCurrent && currentStep !== "review" && (
                    <AnswerBubble
                      onEdit={() => startEdit(currentStep)}
                      showEdit={step === "review"}
                      disabled={
                        step === "sent" || status === "sending"
                      }
                    >
                      {answerText(currentStep)}
                    </AnswerBubble>
                  )}
                </div>
              );
            })}

            {step === "sent" && (
              <p className={khaledBubble}>
                {onSubmit
                  ? `Thanks, ${answers.name}. I'll reply to ${answers.contact}${
                      CONFIG.replyTime
                        ? ` within about ${CONFIG.replyTime}`
                        : ""
                    }.`
                  : `Almost there, ${answers.name}. Your email app should have opened with the message ready. Press send there to finish. If nothing opened, write to ${CONFIG.email}.`}
              </p>
            )}
          </div>

          {/* Composer */}
          <div
            ref={composerRef}
            className={
              `border-t border-(--cc-line) p-3 sm:p-4 ${
                typing ? "invisible" : ""
              }`
            }
          >
            {composer()}
          </div>
        </div>

        {/* ================= CONTACT ALTERNATIVES ================= */}
        <div className="flex min-w-0 flex-col gap-8 border-t border-(--cc-line) pt-10 lg:col-start-1 lg:row-start-2 lg:self-end">

          <h3 className="text-xl font-medium text-(--cc-ink)">
            Prefer your own app?
          </h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <Channel
              label="Email"
              value={CONFIG.email}
              href={`mailto:${CONFIG.email}`}
              actionLabel="Write an email"
            />

            <Channel
              label="WhatsApp"
              value={CONFIG.whatsapp}
              href={`https://wa.me/${whatsappDigits}`}
              actionLabel="Open chat"
              external
            />
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm text-(--cc-muted)">
              Elsewhere
            </p>

            <div className="flex gap-3">
              <RightSidebar mobile />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}