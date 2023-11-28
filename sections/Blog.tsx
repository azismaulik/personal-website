import React, { Suspense } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import Card from "@/components/CardBlog";
import Skeleton from "@/components/Skeleton";
import { Button } from "@/components/ui/button";
import { Post } from "@/lib/types";

// async function getPosts() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}?page=1&limit=6`);
//   const data = await res.json();
//   return data;
// }

const Blog = async () => {
  // const posts = await getPosts();

  return (
    <section className="my-12">
      <div className="flex gap-8 items-center">
        <Reveal>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white flex gap-2 items-center">
            <Image
              src="/images/section/blog.png"
              alt="blog"
              width={40}
              height={40}
              priority
            />
            <span className="font-port text-3xl">Recently Blog</span>
          </h1>
        </Reveal>
        <div className="flex-1 border-t border-neutral-700"></div>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <Suspense fallback={<Skeleton />}>
            {posts?.map((post: Post) => (
              <Card key={post.id} {...post} />
            ))}
          </Suspense> */}
        </div>
      </div>
      <div className="my-6 flex justify-center">
        <Reveal>
          <Button className="font-port font-semibold">View All</Button>
        </Reveal>
      </div>
    </section>
  );
};

export default Blog;
