"use client";
import { useParams } from "next/navigation";

export default function Post() {
  const params = useParams(); // Fails on client
  return <h1>Slug is {params?.slug}</h1>;
}
