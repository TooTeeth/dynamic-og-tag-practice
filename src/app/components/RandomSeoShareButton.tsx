"use client";
import { useRouter } from "next/navigation";

export default function RandomSeoShareaButton() {
  const router = useRouter();

  const handleClick = () => {
    const pages = ["1", "2", "3", "4"];
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    router.push(`/seo-share/${randomPage}`);
  };

  return (
    <button onClick={handleClick} className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition">
      랜덤 SEO 페이지로 이동
    </button>
  );
}
