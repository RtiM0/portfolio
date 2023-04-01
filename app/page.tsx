import Poem from "@/components/poem";

const contact = {
  Mail: 'mailto:hello@shakirmustafa.com',
  Linkedin: 'https://www.linkedin.com/in/otatopotato',
  Telegram: 'https://otatopotato.t.me',
  Github: 'https://github.com/RtiM0',
  Twitter: 'https://twitter.com/RtiM0',
}

export default function Home() {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-2 gap-10 h-full items-center">
        <div className="col-span-2 md:col-span-1 lg:pl-32 p-10 h-1/2">
          <p className="text-lg">Hey! I&apos;m Mustafa,</p>
          <h1 className="text-6xl font-bold">Software Engineer</h1>
          <p className="pt-10">Contact Me:</p>
          <ul className="list-disc pl-5">
            {
              Object.entries(contact)
                .map(
                  ([key, value], i) =>
                    <li key={i}><a href={value} className="text-blue-600 hover:text-blue-900 dark:text-teal-300 dark:hover:text-teal-600">{key}</a></li>
                )
            }
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1 p-10">
          <Poem />
        </div>
      </div>
    </div>
  )
}
