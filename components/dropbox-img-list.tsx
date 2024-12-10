import React from "react";
import DropboxImg from "./dropbox-img";

export default function DropboxImgList() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <DropboxImg />
      <DropboxImg />
      <DropboxImg />
      <DropboxImg />
      <DropboxImg />
      <DropboxImg />
    </section>
  );
}
