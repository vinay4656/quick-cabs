

import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "{{PROJECT_DATASET_0}}",
  apiVersion: "2024-01-01",
  useCdn: false,
});
