import Link from "next/link"

export default function BlogCard({ title, description, readingTime, slug, publishedAt }) {
    return (
        <div className={`p-4 mt-4 rounded-md bg-ht-gray-600`}>
            <Link href={`/blog/${slug}`}><h1 className='text-3xl font-bold transition-all hover:text-ht-secondary-800'>{title}</h1></Link>
            <p>{description}</p>
            <ul className='flex justify-between pt-8 italic font-semibold'>
                <li className='italic'>{publishedAt}</li>
                <li>{readingTime.text}</li>
            </ul>
        </div>
    )
}