"use server";

import { TformSchema, formSchema } from "@/lib/types";
import { supabaseAdmin } from "@/lib/supabase";

export const addLeadToDB = async (data: TformSchema) => {
  // Validate Data server side
  const validData = formSchema.safeParse(data);

  if (!validData) {
    console.log("Data not valid");
    return { error: "Data Invalid" };
  }

  // Push data into DB
  const res = await supabaseAdmin
    .from("contactPageFormLeads") // Your table name
    .insert([
      {
        fullName: data.fullName,
        email: data.email,
        websiteUrl: data.websiteUrl,
        storyQuestion: data.storyQuestion,
        servicesQuestion: data.servicesQuestion,
        projectQuestion: data.projectQuestion,
      }, // Data to insert
    ]);

  if (res.error) {
    console.log(res.error);
    return { error: "An error has occurred." };
  } else {
    return { success: "Your application was submitted succesfully!" };
  }

  // const resend = new Resend(`${process.env.RESEND_API_KEY}`);

  // const res = await resend.emails
  //   .send({
  //     from: "info@pes-edu.com",
  //     // to: "sohyb0155@gmail.com",
  //     to: "Mostafa.261.mk@gmail.com",
  //     subject: "Contact Form Application",
  //     text: emailContent,
  //   })
  //   .then((res) => {
  //     if (res.error) {
  //       console.log(res.error);
  //       return { error: res.error.message };
  //     } else {
  //       return { success: "Email sent successfully!" };
  //     }
  //   });

  // return res;
};
