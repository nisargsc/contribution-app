import Link from "next/link";

export default function ErrorPage() {
    return (
        <div className="flex items-center justify-center w-full h-full flex-col">
            <h1 className="text-4xl m-4 font-semibold">404 Page Not found !!</h1>
            <Link href="/"><button className="button font-medium">  <a>Back to Home</a> </button></Link>
        </div>
    )          
}