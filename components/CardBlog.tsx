"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Reveal } from "./Reveal";
import Link from "next/link";
// import { DropdownShare } from "./DropdownShare";
import { formatTanggal } from "@/lib/helper/FormatTanggal";
import { Post } from "@/lib/types";

const Card = ({
  title,
  featured_image,
  excerpt,
  date,
  categories,
  slug,
}: Post) => {
  const router = useRouter();
  return (
    <div className="relative bg-neutral-900 rounded">
      <Reveal width="100%">
        <Image
          src={featured_image || ""}
          alt={title || ""}
          width={500}
          height={250}
          className="aspect-video w-full cursor-pointer rounded-t mb-2"
          onClick={() => router.push(`/post/${slug}`)}
          priority
        />
      </Reveal>
      <div className="p-4">
        <div className="flex absolute gap-1 top-2 left-2">
          {categories.map((category: any) => (
            <Reveal key={category.term_id}>
              <span className="px-4 py-1 bg-neutral-800/90 backdrop-blur-sm text-white rounded font-port">
                {category.name}
              </span>
            </Reveal>
          ))}
        </div>

        <div>
          <Reveal>
            <Link
              href={`/post/${slug}`}
              className="text-xl font-bold font-port"
            >
              {title}
            </Link>
          </Reveal>
          <Reveal>
            <div
              dangerouslySetInnerHTML={{ __html: excerpt }}
              className="mt-2 text-sm text-neutral-200 line-clamp-5 font-poppins"
            />
          </Reveal>
          <div className="flex justify-between items-center mt-3">
            <Link
              href={`/post/${slug}`}
              className="font-port font-bold text-violet-500 hover:text-violet-600 relative after:absolute after:w-full after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-violet-500 after:hover:bg-violet-600"
            >
              Read More
            </Link>
            <div className="flex gap-2 items-center">
              <Reveal>
                <p className="text-sm text-neutral-300 font-bold">
                  {formatTanggal(date)}
                </p>
              </Reveal>
              <Reveal>
                <p>&bull;</p>
              </Reveal>
              <div className="z-20">
                {/* <DropdownShare url={`${window.location.href}${slug}`} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
