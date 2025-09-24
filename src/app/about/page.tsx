export default function AboutPage() {
  return (
    <>
      <h1 className="mb-10 mt-4 text-center text-5xl max-sm:text-4xl">
        About me
      </h1>
      <div className="flex flex-col gap-y-4">
        <p>
          Hey there! I&apos;m Paulo Paiva, a 22-year-old software developer from São Paulo, Brazil.
        </p>
        <p>
          I started programming in 2022 and since then I&apos;ve been working with full-stack development. 
          On the frontend, I mostly work with React.js, Next.js, JavaScript, and CSS. 
          On the backend, I focus on C#, .NET, REST & Minimal APIs, Swagger/OpenAPI, and architectural patterns like MVC and CQRS.
        </p>
        <p>
          I also have experience with databases such as PostgreSQL, MySQL, Oracle PL/SQL, QuestDB, Supabase, and Firebase, as well as cloud and DevOps tools like Git, AWS (EC2, RDS, S3), Docker, IIS, Fly.io, Vercel, Render, and Railway.
        </p>
        <p>
        I&apos;m always looking for new challenges and opportunities to grow. If you&apos;re hiring or would like to collaborate, feel free to reach out!
        </p> 
        <p>
          If you want to get in touch, send me a DM on{" "}
          <a 
            href="https://www.linkedin.com/in/paulo-paiva-672987292/"
            className="underline decoration-sky-500 underline-offset-4 dark:decoration-sky-600"
            style={{ color: 'inherit' }}
          >
            LinkedIn
          </a> or an email{" "}
          <a 
            href="mailto:ppaivank@gmail.com"
            className="underline decoration-sky-500 underline-offset-4 dark:decoration-sky-600"
            style={{ color: 'inherit' }}
          >
            ppaivank@gmail.com
          </a>.
        </p>
        <p>
          Best,
          <br />
          Paulo Paiva
        </p>
      </div>
    </>
  );
}
