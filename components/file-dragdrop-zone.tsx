"use client";

import { Button } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "actions/storageActions";
import { queryClient } from "config/ReactQueryClientProvider";
import React, { useRef } from "react";

export default function FileDragdraopZone() {
  const fileRef = useRef(null);
  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      });
    },
  });
  return (
    <form
      className="w-full py-20 border-4 border-dotted border-indigo-700 flex flex-col items-center justify-center"
      onSubmit={async (e) => {
        e.preventDefault();
        const file = fileRef.current.files?.[0];
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          const result = await uploadImageMutation.mutate(formData);
        }
      }}
    >
      <input ref={fileRef} type="file" />
      <p>파일을 여기에 끌어다 놓거나 클립하여 업로드하세요.</p>
      <Button type="submit" loading={uploadImageMutation.isPending}>
        파일 업로드
      </Button>
    </form>
  );
}
