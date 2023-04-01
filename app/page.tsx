import Poem from "@/components/poem";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-2 h-full items-center">
        <div className="pl-32">
          <p className="text-lg">Hey! I&apos;m Mustafa</p>
          <h1 className="text-6xl font-bold">Software Engineer</h1>
        </div>
        <div className="m-auto">
          <Poem />
        </div>
      </div>
    </div>
  )
}
