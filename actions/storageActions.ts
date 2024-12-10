"use server";

import { createServerSupabaseClient } from "utils/supabase/server";

const bucket = process.env.NEXT_PUBLIC_STORAGE_BUCKET;

function handleError(error) {
  if (error) {
    console.log(error);
    throw error;
  }
}

export async function uploadFile(formData: FormData) {
  const supabase = await createServerSupabaseClient();
  const file = formData.get("file") as File;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(file.name, file, { upsert: true });

  handleError(error);
  return data;
}

export async function searchFiles(search: string = "") {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.storage
    .from(bucket)
    .list(null, { search });

  handleError(error);
  return data;
}

export async function deleteFile(fileName: string) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.storage
    .from(bucket)
    .remove([fileName]);

  handleError(error);
  return data;
}