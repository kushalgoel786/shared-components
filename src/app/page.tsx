"use client";
import { RoundButton } from "@/components";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("Button");

  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center p-24">
      <p className="pb-10 text-3xl font-bold">Shared Component: RoundButton</p>
      <div>
        <RoundButton
          onClick={() => {
            console.log("Clicked");
          }}>
          {text.length == 0 ? "Button" : text}
        </RoundButton>
      </div>
      <div className="pt-8">
        <label htmlFor="text">
          <span className="text-lg font-medium mr-4">Text:</span>
        </label>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
          className="border rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 border-gray-300 bg-gray-50 border-gray-300"
        />
      </div>
    </main>
  );
}
