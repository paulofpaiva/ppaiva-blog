export default function AboutPage() {
  return (
    <>
      <h1 className="mb-10 mt-4 text-center text-5xl max-sm:text-4xl">
        About me
      </h1>
      <div className="flex flex-col gap-y-4">
      <p>
        I&apos;m Paulo Paiva, a 22-year-old software developer from S&atilde;o Paulo, Brazil.
      </p>
      <p>
        I started programming in 2022 and since then I&apos;ve been working with full-stack development. 
      </p>        
      <p>
        On the frontend, I work mainly with React.js and Next.js, using JavaScript and CSS frameworks like Tailwind, Bootstrap and Bulma to build modern and responsive interfaces.  
      </p>
      <p>
        On the backend, my focus is on C# and .NET, where I&apos;ve built microservices and REST/Minimal APIs, following architectural patterns such as MVC and CQRS.  
      </p>
      <p>
        I also have hands-on experience with AWS, especially EC2 for compute, S3 for storage, RDS for relational databases, and SQS for message queues.  
      </p>
      <p>
        When it comes to data, I&apos;ve worked with relational databases like PostgreSQL, MySQL, Oracle PL/SQL, QuestDB, Supabase, and Firebase.  
      </p>
      <p>
        For DevOps and deployment, I&apos;m comfortable using Git, Docker, IIS, and cloud platforms such as Fly.io, Vercel, Render, and Railway.  
      </p>
      <p>
        I&apos;m always looking for new challenges and opportunities to grow. If you&apos;re hiring or would like to collaborate, feel free to reach out.
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
