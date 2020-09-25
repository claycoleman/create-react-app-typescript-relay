async function fetchGraphQL(text: string, variables: any) {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImNvbGVjbGF5bWFuIiwiZXhwIjoyMjMyMTQwNjY1LCJlbWFpbCI6ImpjbGF5dG9uY29sZW1hbkBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYwMDk4ODY2NX0.IbN_F68OF-G_oAmz7eIdX0V5fJv9nsuSpSt93aUoZQA";

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch("http://127.0.0.1:8000/graphql", {
    method: "POST",
    headers: {
      Authorization: `JWT ${token ?? "invalid"}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
