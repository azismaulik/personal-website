"use client";

import React, { Suspense } from "react";
import { Reveal } from "@/components/Reveal";
import Card from "@/components/CardBlog";
import Skeleton from "@/components/Skeleton";
import { Search } from "lucide-react";
import { Post } from "@/lib/types";

// async function getPosts() {
//   const posts = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}`);
//   const data = await posts.json();
//   return data;
// }

const BlogPage = async () => {
  //   const posts = await getPosts();
  //   const [posts, setPosts] = React.useState<Post[]>([]);

  //   const [isLoading, setIsLoading] = React.useState(false);
  //   const [page, setPage] = React.useState(1);
  //   const [isLastPage, setIsLastPage] = React.useState(false);

  //   const getPosts = async () => {
  //     try {
  //       setIsLoading(true);
  //       const res = await fetch(
  //         `${process.env.NEXT_PUBLIC_CMS_URL}?page=${page}&limit=12`
  //       );
  //       const data = await res.json();
  //       setPosts([...posts, ...data]);
  //       setIsLastPage(data.length < 12);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   React.useEffect(() => {
  //     getPosts();
  //   }, [page]);

  return (
    <div className="my-28">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <Reveal>
          <h1 className="text-4xl font-bold font-port">Blog</h1>
        </Reveal>
        <Reveal>
          <div className="md:w-[350px] flex items-center gap-4 py-2 px-4 rounded-lg bg-neutral-800">
            <label htmlFor="search">
              <Search size={20} className="cursor-pointer" />
            </label>
            <input
              id="search"
              type="text"
              className="w-full focus:outline-none bg-transparent text-sm placeholder:text-xs"
              placeholder="Search..."
            />
          </div>
        </Reveal>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <Suspense fallback={<Skeleton />}>
            {posts?.map((post: Post) => (
              <Card key={post.id} {...post} />
            ))}
          </Suspense> */}
        </div>

        {/* {!isLastPage && (
          <div className="my-6 flex justify-center">
            <Reveal>
              {!isLoading ? (
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={isLoading}
                  className={`${
                    isLoading
                      ? "cursor-not-allowed bg-transparent"
                      : "bg-cyan-600 hover:bg-cyan-700"
                  } text-white font-port transition py-1 px-4 rounded`}
                >
                  Load More{" "}
                </button>
              ) : (
                <span className="loader"></span>
              )}
            </Reveal>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default BlogPage;
