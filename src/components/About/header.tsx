import type React from "react"
import Marquee from "./Marquee"

function App() {
  return (
    <div className="min-h-screen text-white bg-black">
      <section className="relative flex flex-col items-center justify-center px-4 py-20">

        <div className="container mx-auto max-w-6xl relative z-10">
          <Marquee/>
          <div className="mt-12 space-y-8">
            <ContentBlock>
              Tamar Software was founded back in 2018 and has rapidly emerged to become the leader in the IT industry by
              delivering cutting-edge solutions. Addressing the evolving requirements of businesses across the world has
              made this software development company a leading choice for several businesses. Being committed to quality
              and innovation, Tamar Software has already positioned itself as a trusted partner for several companies
              looking for innovation and transformation.
            </ContentBlock>

            <ContentBlock>
              Tamar Software has taken a strategic decision to a Limited Liability Partnership in 2024 to support the
              rapid growth of the organisation. The organization is equipped to empower innovation and deliver superior
              IT and software development services with strategic business goals.
            </ContentBlock>

            <ContentBlock>
              At the growth of this dynamic organisation is Pradeep Tamar Kumar who has always been helpful. He brings
              his decades of experience in the banking, insurance and IT sectors to his company. His visionary
              leadership led with integrity and passion has been instrumental to the growth and development of Tamar
              Software.
            </ContentBlock>
          </div>
        </div>
      </section>
    </div>
  )
}
function ContentBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 transition-all duration-300 ease-in-out hover:bg-black/60 hover:border-gray-500 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
      <p className="text-lg md:text-xl text-gray-300">{children}</p>
    </div>
  )
}

export default App

