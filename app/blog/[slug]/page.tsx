import Layout from "@/components/layout";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = ({ params }: PageProps) => {
  const blogs = [
    "Business",
    "Automobile",
    "BestApps",
    "Fashion",
    "Technology",
    "Health",
    "Travel",
    "Food",
    "Finance",
    "Lifestyle",
    "Education",
    "Entertainment",
    "Environment",
    "Culture",
    "Politics",
  ];

  if (blogs.includes(params.slug)) {
    return (
      <Layout>
        <div>{params.slug}</div>
      </Layout>
    );
  } else {
    return <div>Page not found</div>;
  }
};

export default Page;
