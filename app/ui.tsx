import DropboxImgList from "components/dropbox-img-list";
import FileDragdraopZone from "components/file-dragdrop-zone";
import Logo from "components/logo";
import SearchComponent from "components/search-component";
import React from "react";

export default function UI() {
  return (
    <main className="w-full p-2 flex flex-col gap-4">
      <Logo />
      <SearchComponent />
      <FileDragdraopZone />
      <DropboxImgList />
    </main>
  );
}
