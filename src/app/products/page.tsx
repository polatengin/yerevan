"use client";

import { useBroadcastChannel } from "@/useBroadcastChannel";

const generateUserName = () => {
  const arr = new Uint8Array(4);
  window.crypto.getRandomValues(arr)
  return Array.from(arr, (dec) => dec.toString(16).padStart(2, "0")).join('');
};

export default function Products() {
  const postLoginChanged = useBroadcastChannel("login");

  return (
    <div>
      <h1>Products</h1>
    </div>
  )
}
