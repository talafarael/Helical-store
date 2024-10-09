export async function getStaticProps({
  context,
}: {
  context: { params: { id: string } };
}) {
  return {
    props: { id: context.params.id }, // Изменил на id
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "coffee" } }], // Изменил путь на params с id
    fallback: false,
  };
}

// Компонент страницы
export default function Main({ id }: { id: string }) {
  return <div>Текст страницы для {id}</div>; // Теперь отображается id
}
