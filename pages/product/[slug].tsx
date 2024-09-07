import { useRouter } from "next/router";
export default function main() {
  const router = useRouter();
  return <div>{router.query.slug}</div>;
}
