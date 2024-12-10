import { IconButton } from "@material-tailwind/react";
import React from "react";

export default function DropboxImg() {
  return (
    <div className="relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md">
      {/* Image */}
      <div>
        <img
          src="/images/cutedog.jpeg"
          className="w-full aspect-square rounded-2xl"
        />
      </div>
      {/* FileName  */}
      <div>cutedog.jpeg</div>
      <IconButton color="red" className="absolute top-4 right-4">
        <i className="fas fa-trash" />
      </IconButton>
    </div>
  );
}
