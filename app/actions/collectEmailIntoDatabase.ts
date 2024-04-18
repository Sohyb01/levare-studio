"use server";

import { supabaseAdmin } from "@/lib/supabase";

const collectEmailIntoDatabase = async ({ email }: { email: string }) => {
  // Send API Request to Supabase
  const res = await supabaseAdmin
    .from("leadMagnetCollectedEmails") // Your table name
    .insert([
      { email: email }, // Data to insert
    ]);

  if (res.error) {
    console.log(res.error);
    return { error: "An error has occurred." };
  } else {
    return { success: "Your application was submitted succesfully!" };
  }
};
export default collectEmailIntoDatabase;
