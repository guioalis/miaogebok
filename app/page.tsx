import BlogList from "@/components/BlogList";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <BlogList />
    </div>
  );
} 