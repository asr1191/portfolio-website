import NavBar from "@components/NavBar";

export default function Layout({ children }) {
    return (
        <div className="bg-ht-gray-700">
            <NavBar />
            {children}
        </div>
    )
}