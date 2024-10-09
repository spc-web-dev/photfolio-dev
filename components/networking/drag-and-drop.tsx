"use client";

import { useEffect, useRef } from "react";
import { createSwapy } from "swapy";

export default function DragAndDrop() {
  const contianerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = contianerRef.current;
    const swapy = createSwapy(container, {
      swapMode: "hover",
    });

    return () => {
        swapy.destroy()
      }
  });

  return (
    <div className="container" ref={contianerRef}>
      <div className="slot a " data-swapy-slot="1">
        <div className="item a" data-swapy-item="a">
          <div className="handle" data-swapy-handle></div>
          <div>A</div>
        </div>
      </div>
      <div className="slot b " data-swapy-slot="2">
        <div className="item b" data-swapy-item="b">
          <div>B</div>
        </div>
      </div>
      <div className="slot c" data-swapy-slot="3">
        <div className="item c" data-swapy-item="c">
          <div>C</div>
        </div>
      </div>
      <div className="slot d" data-swapy-slot="4">
        <div className="item d" data-swapy-item="d">
          <div>D</div>
        </div>
      </div>
    </div>
  );
}
