export default function Page() {
  return <main>
    <h1>Hello, Next.js!</h1>
    <p>This is a simple page using Next.js.</p>
    <p>You are connected to {process.env.HOSTNAME || 'no host'}.</p>
  </main>;
}
