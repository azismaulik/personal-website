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
  link?: string | null;
  tags?: string[];
  stacks?: string[];
  landscape?: boolean;
};

export type ExperienceProps = {
  title: string;
  company_name: string;
  date: string;
};
