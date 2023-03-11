"use client";

import { useCallback, useRef } from "react";

export function useBroadcastChannel<T = string>(channelName: string, handleMessage?: (event: MessageEvent) => void): (data: T) => void {
  const channelRef = useRef(new BroadcastChannel(channelName + "-channel"));

  if (handleMessage) {
    channelRef.current?.addEventListener("message", handleMessage);
  }

  return useCallback(data => channelRef?.current?.postMessage(data), [channelRef]);
}
