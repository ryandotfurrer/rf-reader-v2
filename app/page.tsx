export default function Home() {
  return (
    <main className="mx-auto max-w-screen-md flow">
      <header className="pt-24">
        <h1>RF Reader</h1>
        <p className="text-3xl">A better read-it-later app</p>
      </header>
      <section id="features" className="flow py-12">
        <h2>Features</h2>
        <aside className="flex gap-2 items-center">
          <svg
            className="w-10 h-auto"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM184 96a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8"
            />
          </svg>
          <h3>
            Read <i>what</i> you want
          </h3>
        </aside>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          aspernatur adipisci blanditiis asperiores officia corporis, ex aliquid
          dolorum esse suscipit molestiae ab excepturi sit quaerat.
        </p>
        <aside className="flex gap-2 items-center">
          <svg
            className="w-10 h-auto"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M128 32a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80M61.66 29.66l-32 32a8 8 0 0 1-11.32-11.32l32-32a8 8 0 1 1 11.32 11.32m176 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32M184 120a8 8 0 0 1 0 16h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48Z"
            />
          </svg>
          <h3>
            Read <i>when</i> you want
          </h3>
        </aside>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex modi
          dolores, repudiandae mollitia, voluptate consequuntur architecto ullam
          explicabo inventore odio quo nihil id possimus exercitationem pariatur
          laborum illum cumque nam doloremque! Reiciendis recusandae impedit
          distinctio?
        </p>
        <aside className="flex gap-2 items-center">
          <svg
            className="w-10 h-auto"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 160V48H48v160z"
            />
          </svg>
          <h3>
            Read <i>how</i> you want
          </h3>
        </aside>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus
        ullam eius, dicta modi aperiam.
      </section>
      <section
        id="newsletter-signup"
        className="flow max-w-screen-sm mx-auto py-12 text-center"
      >
        <h2>Updates</h2>
        <p className="text-balance">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet autem
          quae nam, nihil quis earum!
        </p>
        <div className="max-w-fit mx-auto">
          <iframe
            src="https://ryandotfurrer.substack.com/embed"
            width="480"
            height="150"
            className="max-w-full"
          />
        </div>
      </section>
    </main>
  );
}
