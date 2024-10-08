export default async function Main() {
  return <div>text</div>;
}
export const getStaticPaths = () => {
  return {
    paths: [
      // if no `locale` is provided only the defaultLocale will be generated
      { params: { id: "post-1" }, locale: "en-US" },
      { params: { id: "post-1" }, locale: "fr" },
    ],
    fallback: true,
  };
};
