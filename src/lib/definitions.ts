import type { LucideIcon } from "lucide-react";
import { z } from "zod";

export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  techStack: string[];
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
    hint: string;
  };
};

export type Testimonial = {
  quote: string;
  author: {
    name: string;
    title: string;
    avatar: {
      src: string;
      hint: string;
    };
  };
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: {
    src: string;
    hint: string;
  };
};

export type JobOpening = {
  title: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  description: string;
};

export type TechStackItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
} | null;

export type ApplyFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
} | null;

export type ChatState = {
  messages: { role: "user" | "model"; content: string }[];
};

const MessageSchema = z.object({
  role: z.enum(["user", "model"]),
  content: z.string(),
});

export const ChatInputSchema = z.object({
  history: z.array(MessageSchema),
  message: z.string(),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export type ChatOutput = string;
