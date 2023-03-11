"use client";

import Link from 'next/link'
import './globals.css'
import { useBroadcastChannel } from '@/useBroadcastChannel';

export default function RootLayout({children}: {children: React.ReactNode}) {
  useBroadcastChannel("login", (e) => console.log(e.data));

  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li><Link href={"/products"}>Products</Link></li>
            <li><Link href={"/users"}>Users</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
