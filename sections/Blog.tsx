import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import Card from "@/components/CardBlog";
import Skeleton from "@/components/Skeleton";

type Post = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  featured_image: string;
  categories: string[];
  slug: string;
};

const Blog = () => {
  const [posts, setPosts] = React.useState([]);

  const getPosts = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_URL}?page=1&limit=6`
    );
    const data = await res.json();
    setPosts(data);
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
    <section className="my-12">
      <div className="flex gap-8 items-center">
        <Reveal>
          <h1 className="text-2xl font-bold text-white flex gap-2 items-center">
            <Image
              src="/section/blog.png"
              alt="blog"
              width={40}
              height={40}
              priority
            />
            <span className="drop-shadow-[0_5px_5px_rgba(255,255,0,0.5)] font-port text-3xl">
              Recently Blog
            </span>
          </h1>
        </Reveal>
        <div className="flex-1 border-t border-neutral-700"></div>
      </div>
      <div className="mt-6">
        {!Object.keys(posts).length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Skeleton cards={6} />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts?.map((post: any) => (
              <Card
                key={post.id}
                title={post.title}
                date={post.date}
                summary={post.excerpt}
                cover={post.featured_image}
                categories={post.categories}
                slug={post.slug}
              />
            ))}
          </div>
        )}
      </div>
      <div className="my-6 flex justify-center">
        <Reveal>
          <Link
            href="/post"
            className="text-white font-port bg-cyan-600 hover:bg-cyan-700 transition py-1 px-4 rounded"
          >
            view all
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Blog;
