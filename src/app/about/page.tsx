export default function AboutPage() {
  return (
    <div className="mx-auto max-w-prose">
      <h1 className="mb-10 mt-4 text-center text-5xl max-sm:text-4xl">
        About me
      </h1>
      <div className="flex flex-col gap-y-4">
      <p>
        I&apos;m Paulo Paiva, a 22-year-old software developer from S&atilde;o Paulo, Brazil.
        I began my journey in programming in 2022 and quickly immersed myself in the world of full-stack development.

      </p> 
      <p>
        When I&apos;m not coding, you&apos;ll probably find me playing guitar, spending time with my golden retriever Milo, or hitting the gym.
        Just as these activities keep me balanced outside of work, coding is where I challenge myself the most.
      </p>
      <p>
        On the frontend, I work mainly with React.js and Next.js using JavaScript, and CSS frameworks like Tailwind, Bootstrap and Bulma to build responsive user interfaces.  
      </p>
      <p>
        On the backend, I work extensively with the .NET ecosystem, developing microservices and REST APIs, and applying architectural patterns like MVC, CQRS, and DDD.
        I have solid experience across authentication, authorization, logging, dependency injection, and database access.
      </p>
      <p>
        I also have solid hands-on experience with AWS, architecting and deploying solutions that integrate EC2, S3, RDS, and SQS to build scalable and production-ready systems.
      </p>
      <p>
        When it comes to data, I have experience with relational databases such as PostgreSQL, MySQL, and Oracle PL/SQL, as well as platforms like QuestDB and Supabase. 
        My work includes designing schemas, building views, stored procedures and functions.
      </p>
      <p>
        For DevOps and deployment, I&apos;m experienced with Git for version control, Docker for containerization, and IIS for hosting .NET applications.
        I&apos;ve also deployed and maintained applications on cloud platforms such as Fly.io, Vercel, Render, and Railway, applying CI/CD pipelines and environment-specific configurations.
      </p>
      <p>
        I&apos;m always looking for new challenges and opportunities to grow. If you&apos;re hiring or would like to collaborate, feel free to reach out.
        Send me a DM on{" "}
          <a 
            href="https://www.linkedin.com/in/paulo-paiva-672987292/"
            className="underline decoration-sky-500 underline-offset-4 dark:decoration-sky-600"
            style={{ color: 'inherit' }}
          >
            LinkedIn
          </a> or an email at{" "}
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
