import React from "react";

export default function FileDragdraopZone() {
  return (
    <section className="w-full py-20 border-4 border-dotted border-indigo-700 flex flex-col items-center justify-center">
      <input type="file" />
      <p>파일을 여기에 끌어다 놓거나 클립하여 업로드하세요.</p>
    </section>
  );
}
