import { Suspense } from "react";
import getBlogsById from "@/actions/getBlogsById";
import BlogId from "@/components/BlogId";

interface IParams {
  blogId: string;
}

export default function Page({ params }: { params: IParams }) {
  return (
    <Suspense
      fallback={
        <main className="page-frame section-page" role="status">
          Loading mural...
        </main>
      }
    >
      <BlogPage params={params} />
    </Suspense>
  );
}

async function BlogPage({ params }: { params: IParams }) {
  const blog = await getBlogsById(params);

  if (!blog) return null;

  return (
    <div className="">
      <div>
        <BlogId
          name={blog?.name}
          description={blog?.description}
          blogId={blog?.id}
          imageSrc={blog?.imageSrc}
        />
      </div>
    </div>
  );
}
