import Link from 'next/link';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main>
      <UserButton />

      <div>
        <ul>
          <li>
            <Link href='/sign-in'>sign in</Link>
          </li>
          <li>
            <Link href='/foo'>Protected Foo route</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
