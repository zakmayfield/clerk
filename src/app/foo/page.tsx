import { auth } from '@clerk/nextjs';

export default function Foo() {
  const { userId } = auth();

  return (
    <main>
      <div>foo page</div>

      <div>User ID: {userId}</div>
    </main>
  );
}
