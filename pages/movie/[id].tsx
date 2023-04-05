import { useRouter } from "next/router";

export default function Test() {
  const router = useRouter();
  return <div>{router.query.id}</div>;
}
