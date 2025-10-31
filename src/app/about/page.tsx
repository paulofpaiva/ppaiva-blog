export default function AboutPage() {
  return (
    <div className="mx-auto max-w-prose">
      <h1 className="mb-10 mt-4 text-center text-5xl max-sm:text-4xl">
        About me
      </h1>
      <div className="flex flex-col gap-y-4">
      <p>
        I'm Paulo Paiva, a 22-year-old software developer from São Paulo, Brazil.
        I hold a Technology degree in Systems Analysis and Development and have been developing full-stack applications since 2022, working across frontend, backend, and cloud infrastructure.
      </p> 
      <p>
        On the frontend, I work mainly with React.js and Next.js using JavaScript, and CSS frameworks like Tailwind, Shadcn and Bootstrap to build responsive user interfaces.  
        On the backend, I work extensively with C#, Node.js and the .NET ecosystem, including ASP.NET Core, Razor Views, and Minimal APIs, developing microservices and REST APIs, 
        and applying architectural and design patterns such as OOP, MVC, CQRS, DDD, and Clean Architecture.
        I have solid experience across authentication, caching and session management, authorization, logging, dependency injection, and database access.
      </p>
      <p>
        I’ve also worked extensively with AWS (EC2, S3, RDS, SQS) and relational databases like PostgreSQL, MySQL, Oracle PL/SQL, and QuestDB, as well as modern backend platforms such as Supabase and Firebase.
        For deployment and DevOps, I use Git, Docker, and IIS, managing environments on platforms like Fly.io, Vercel, Render, and Railway with CI/CD pipelines.
      </p>
      <p>
         When I’m not coding, I enjoy spending time with my golden retriever, Milo, or going to the gym, both help me stay balanced and focused outside of work.
      </p>
      <p>
        I’m a native Portuguese speaker and fluent in English, with strong communication skills in both languages.
        Always open to new challenges and collaborations, feel free to reach out on{" "}
          <a 
            href="https://www.linkedin.com/in/paulofpaiva/"
            className="underline decoration-sky-500 underline-offset-4 dark:decoration-sky-600"
            style={{ color: 'inherit' }}
          >
            LinkedIn
          </a> or send me an email at{" "}
          <a 
            href="mailto:ppaivank@gmail.com"
            className="underline decoration-sky-500 underline-offset-4 dark:decoration-sky-600"
            style={{ color: 'inherit' }}
          >
            ppaivank@gmail.com
          </a>!
        </p>
        <p>
          Best,
          <br />
          Paulo Paiva
        </p>
      </div>
    </div>
  );
}
