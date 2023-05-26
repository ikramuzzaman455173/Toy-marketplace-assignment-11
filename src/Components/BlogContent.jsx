const BlogContent = () => {
  return (
    <>
      <section className="md:border-8 border-0 border-slate-300 shadow-md container px-5 mx-auto flex flex-wrap items-center my-10 rounded-md blog">
        <div className="py-8 px-4 bg-slate-600 m-5 rounded-md shadow-md mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <h2 className="mb-10 text-3xl text-center lg:text-4xl underline decoration-double tracking-tight font-extrabold text-slate-200">
            Blog Faq Sections
          </h2>
          <div className="grid gap-8 lg:grid-cols-2 ">
            <article className="blog-article">
              <h4 className="mb-2 text-xl font-semibold tracking-tight text-slate-600 dark:text-white">
                <span className="text-primary">1. </span>What is an access token and refresh token? How do they work and where should we store them on the client-side?
              </h4>
              <p className="mb-5 font-normal text-md text-slate-500 dark:text-gray-400">
                <span className="text-primary font-bold">Ans: </span> <strong>Refresh tokens allow you to balance your users' access needs with your organization's security practices.</strong>  Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them.
                <ul className="list-decimal pl-4 marker:text-primary font-bold mt-5">
                <li className="li-tag">Store it in browser local storage. ...</li>
                <li className="li-tag">Store it in a cookie in client side, it can be safer than browser local storage.</li>
                <li className="li-tag">Don't store the token but store username and password in the browser or client-side cookie, and then retrieve a new token by sending credentials silently.</li>
              </ul>
              </p>
            </article>

            <article className="blog-article">
              <h4 className="mb-2 text-xl font-semibold tracking-tight text-slate-600 dark:text-white">
                <span className="text-primary">2. </span>Compare SQL and NoSQL databases?
              </h4>
              <p className="mb-5 font-normal text-md text-slate-500 dark:text-gray-400">
                <span className="text-primary">Ans: </span>SQL: <strong>SQL databases use a structured data model</strong> based on tables with predefined schemas. They follow a rigid structure with fixed columns and data types. <br /> <br />
                NoSQL: <strong>NoSQL databases utilize various data models such as key-value pairs,</strong> documents, graphs, or columnar data. They offer more flexibility in data representation and allow for schemaless designs.
              </p>
            </article>

            <article className="blog-article">
              <h4 className="mb-2 text-xl font-semibold tracking-tight text-slate-600 dark:text-white">
                <span className="text-primary">3. </span>What is express js? What is Nest JS (google it)?
              </h4>
              <p className="mb-5 font-normal text-md text-slate-500 dark:text-gray-400">
                <span className="text-primary">Ans: </span> <strong>NestJS provides a more structured and opinionated approach,</strong> which can make it easier to build complex APIs with proper separation of concerns. <strong>Express, on the other hand, is more lightweight and flexible,</strong> which makes it a popular choice for simple or small-scale APIs.
              </p>
            </article>

            <article className="blog-article">
              <h4 className="mb-2 text-xl font-semibold tracking-tight text-slate-600 dark:text-white">
                <span className="text-primary">4. </span>What is MongoDB aggregate and how does it work (google it)?
              </h4>
              <p className="mb-5 font-normal text-md text-slate-500 dark:text-gray-400">
                <span className="text-primary">Ans: </span> MongoDB's aggregate is a powerful framework for performing data aggregation operations on collections within a MongoDB database. <strong>It allows you to process and analyze data, perform calculations, and transform</strong> documents using a flexible pipeline of stages. <br /><br />
                The aggregation framework in <strong>MongoDB consists of a sequence of stages, where each stage performs a specific operation</strong> on the input documents and passes the result to the next stage. These stages can include operations like filtering, grouping, sorting, projecting, and calculating aggregate values.
              </p>
            </article>




          </div>
        </div>
      </section>
    </>
  );
};

export default BlogContent;


