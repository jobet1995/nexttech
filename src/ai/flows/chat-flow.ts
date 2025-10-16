"use server";
/**
 * @fileOverview A simple chatbot flow.
 *
 * - chat - A function that handles the chatbot conversation.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { ai } from "@/ai/genkit";
import { z } from "genkit";
import type { ChatInput, ChatOutput } from "@/lib/definitions";
import { ChatInputSchema } from "@/lib/definitions";

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const chatFlow = ai.defineFlow(
  {
    name: "chatFlow",
    inputSchema: ChatInputSchema as unknown as z.ZodTypeAny,
    outputSchema: z.string(),
  },
  async (input) => {
    const { history, message } = input;

    // Format the messages for Genkit
    const messages = [
      ...history.map((h: { role: string; content: string }) => ({
        role: h.role,
        content: [{ text: h.content }],
      })),
      {
        role: "user",
        content: [{ text: message }],
      },
    ];

    // Generate response using the configured model
    const response = await ai.generate({
      prompt: messages,
      config: {
        temperature: 0.7,
      },
    });

    return response.text;
  },
);
