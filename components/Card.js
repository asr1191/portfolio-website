export default function Card({ children, className, title, subtitle }) {
    return (
        <section className={className}>
            <h1 className="text-5xl font-bold text-ht-primary-900">{title}</h1>
            <h2 className="mt-2 mb-8 text-lg font-semibold text-ht-gray-600">{subtitle}</h2>
            {children}
        </section>
    )
}