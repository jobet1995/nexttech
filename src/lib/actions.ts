"use server";

import { z } from "zod";
import { chat } from "@/ai/flows/chat-flow";
import type {
  ContactFormState,
  ApplyFormState,
  ChatState,
} from "./definitions";
import { ChatInputSchema } from "./definitions";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

const applyFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  jobTitle: z.string(),
});

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData,
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  // In a real application, you would send an email or save to a database.
  console.log("Contact form submitted:", parsed.data);

  return {
    message:
      "Thank you! Your message has been sent successfully. We'll get back to you soon.",
  };
}

export async function submitApplicationForm(
  prevState: ApplyFormState,
  data: FormData,
): Promise<ApplyFormState> {
  const formData = Object.fromEntries(data);
  const parsed = applyFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  // In a real application, you would handle the file upload and save the application.
  console.log("Application form submitted:", parsed.data);

  return {
    message:
      "Thank you for applying! We've received your application and will be in touch if you're a good fit.",
  };
}

export async function submitChat(
  prevState: ChatState,
  data: FormData,
): Promise<ChatState> {
  const formData = Object.fromEntries(data);
  const history = JSON.parse(formData.history as string);
  const message = formData.message as string;

  const validatedInput = ChatInputSchema.safeParse({ history, message });

  if (!validatedInput.success) {
    console.error("Invalid chat input:", validatedInput.error);
    return {
      messages: [
        ...history,
        {
          role: "model",
          content: "There was an error with your request. Please try again.",
        },
      ],
    };
  }

  const newUserMessage = { role: "user" as const, content: message };
  const newHistory = [...history, newUserMessage];

  try {
    const response = await chat(validatedInput.data);
    return {
      messages: [...newHistory, { role: "model", content: response }],
    };
  } catch (error) {
    console.error("Error calling chat flow:", error);
    return {
      messages: [
        ...newHistory,
        {
          role: "model",
          content:
            "Sorry, I am having trouble connecting. Please try again later.",
        },
      ],
    };
  }
}
