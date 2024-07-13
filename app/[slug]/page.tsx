import Layout from "@/components/layout"
export default function Page({ params }: { params: { slug: string } }) {
    return <div><Layout>{params.slug}</Layout></div>
}