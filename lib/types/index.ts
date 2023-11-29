export type Post = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  featured_image: string;
  categories: string[];
  slug: string;
};

export type ProjectProps = {
  name?: string;
  image?: string;
  description?: string;
  link?: string;
  tags?: string[];
  stacks?: string[];
  landscape?: boolean;
};
