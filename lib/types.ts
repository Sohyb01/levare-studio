import { z } from "zod";

// Contact form types
export const formSchema = z.object({
  fullName: z.string().min(1, "Required"),
  email: z.string().email().min(1, "Required"),
  websiteUrl: z.string().optional(),
  storyQuestion: z.string().min(1, "Required"),
  servicesQuestion: z.string().min(1, "Required"),
  projectQuestion: z.string().min(1, "Required"),
  // phoneNumber: z.string().min(1, "Phone number is required"),
  // email: z.string().email("Email must be a valid email"),
  // country: z.string().min(1, "Country is required"),
  // city: z.string().min(1, "City is required"),
});

export type TformSchema = z.infer<typeof formSchema>;
