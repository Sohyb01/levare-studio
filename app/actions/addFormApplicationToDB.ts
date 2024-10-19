"use server";

import { TformSchema, formSchema } from "@/lib/types";
import { Resend } from "resend";

export const addFormApplicationToDB = async (data: TformSchema) => {
  // Validate Data server side
  const validData = formSchema.safeParse(data);

  if (!validData) {
    console.log("Data not valid");
    return { error: "Data Invalid" };
  }

  // Push data into DB

  const resend = new Resend(`${process.env.RESEND_API_KEY}`);

  const emailContent = `
    New Application for Levare Studio!
    Full Name: ${data.fullName} \n
    Email: ${data.email} \n
    Website Url: ${data.websiteUrl ? data.websiteUrl : "-"} \n
    Their Story: ${data.storyQuestion} \n
    Project goals: ${data.projectQuestion};
    `;

  // Send email to me
  const emailRes = await resend.emails.send({
    from: "onboarding@levarestudio.com",
    to: "sohyb0155@gmail.com",
    subject: "Contact Form Application",
    text: emailContent,
  });

  console.log("emailres: ", emailRes);

  return { success: "Your application was submitted succesfully!" };
};
