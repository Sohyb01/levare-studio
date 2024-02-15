import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   `${process.env.DATABASE_URL!}`,
//   `${process.env.SUPABASE_PUBLIC_KEY!}`
// );

export const supabaseAdmin = createClient(
  `${process.env.DATABASE_URL!}`,
  `${process.env.SUPABASE_SERVICE_ROLE_KEY!}`
);
