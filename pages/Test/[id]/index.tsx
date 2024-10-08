export default function Main({ id }: { id: string }) {
  return <div>Post ID: {id}</div>;
}

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "post-1" }, locale: "en-US" },
      { params: { id: "post-1" }, locale: "fr" },
    ],
    fallback: true, // or 'blocking' or false based on your needs
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  // Fetch data based on params.id or do something dynamic
  const { id } = params;

  return {
    props: {
      id, // pass the id as a prop to the page
    },
  };
};
