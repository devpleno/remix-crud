import { Link, Outlet, useMatches } from "@remix-run/react";

const QuotesLayout = () => {
  const matches = useMatches();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>
        <Link to="/">Quotes</Link>
      </h1>

      <ul>
        {matches.map((match) => {
          if (match.handle && match.handle.breadcrumb) {
            const handleElement = match.handle.breadcrumb(match.data);
            return <li>{handleElement}</li>;
          }
          return null;
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export function ErrorBoundary({ error }: { error: Error }) {
  return <h1>Error quotes {JSON.stringify(error.message)}</h1>;
}

export default QuotesLayout;
