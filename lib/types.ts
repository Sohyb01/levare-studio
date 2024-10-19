import { z } from "zod";

// Contact form types
export const formSchema = z.object({
  fullName: z.string().min(1, "Required").max(100, "Max length 100 characters"),
  email: z
    .string()
    .email()
    .min(1, "Required")
    .max(100, "Max length 100 characters"),
  websiteUrl: z.string().max(100, "Max length 100 characters").optional(),
  storyQuestion: z
    .string()
    .min(1, "Required")
    .max(1000, "Max length 1000 is characters"),
  projectQuestion: z
    .string()
    .min(1, "Required")
    .max(1000, "Max length 1000 is characters"),
  // phoneNumber: z.string().min(1, "Phone number is required"),
  // email: z.string().email("Email must be a valid email"),
  // country: z.string().min(1, "Country is required"),
  // city: z.string().min(1, "City is required"),
});

export type TformSchema = z.infer<typeof formSchema>;

export const leadMagnetEmailFormSchema = z.object({
  email: z.string().email().min(1, "Required"),
});

export type TleadMagnetEmailFormSchema = z.infer<
  typeof leadMagnetEmailFormSchema
>;

import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];
