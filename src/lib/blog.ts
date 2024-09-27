import glob from "fast-glob";

interface Blog {
  title: string;
  description: string;
  author: {
    name: string;
    src: string;
  };
  date: string;
  image?: string;
}

export interface BlogWithSlug extends Blog {
  slug: string;
}

async function importBlog(blogFilename: string): Promise<BlogWithSlug> {
  const { blog } = (await import(`../app/(marketing)/blog/${blogFilename}`)) as {
    default: React.ComponentType;
    blog: Blog;
  };

  return {
    slug: blogFilename.replace(/(\/page)?\.mdx$/, ""),
    ...blog,
  };
}

export async function getAllBlogs() {
  const blogFilenames = await glob("*/page.mdx", {
    cwd: "./app/(marketing)/blog",
  });

  const blogs = await Promise.all(blogFilenames.map(importBlog));

  return blogs.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
