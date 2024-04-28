"use server";

import { supabaseAdmin } from "@/lib/supabase";

const collectEmailIntoDatabase = async ({ email }: { email: string }) => {
  // Send API Request to Supabase to check if email already exists in DB
  const { data, error } = await supabaseAdmin
    .from("leadMagnetCollectedEmails")
    .select("email")
    .eq("email", email)
    .single();

  // If it already exists in DB, dont add a new one and just return success
  if (data) {
    return { success: "Your email was submitted succesfully!" };
  }

  // If it doesnt exist in DB
  const res = await supabaseAdmin
    .from("leadMagnetCollectedEmails") // Your table name
    .insert([
      { email: email }, // Data to insert
    ]);

  if (res.error) {
    console.log(res.error);
    return { error: "An error has occurred." };
  } else {
    return { success: "Your email was submitted succesfully!" };
  }
};
export default collectEmailIntoDatabase;
