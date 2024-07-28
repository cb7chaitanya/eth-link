import Appbar from "@/components/Appbar"
import { Hero } from "@/components/hero-section"

const page = () => {
  return (
    <div className="h-screen w-full">
        <Appbar />
        <Hero />
    </div>
  )
}

export default page