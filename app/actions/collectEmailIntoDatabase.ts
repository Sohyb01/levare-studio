"use server";

import { supabaseAdmin } from "@/lib/supabase";

const collectEmailIntoDatabase = async ({
  emailAddress,
  businessLink,
}: {
  emailAddress: string;
  businessLink: string;
}) => {
  // Send API Request to Supabase
  const response = await supabaseAdmin
    .from("collected_email_leads") // Your table name
    .insert([
      { email_address: emailAddress, business_link: businessLink }, // Data to insert
    ]);
  return response.statusText;
};
export default collectEmailIntoDatabase;
