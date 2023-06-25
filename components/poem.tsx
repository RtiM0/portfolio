const poem = `
I'm Mustafa, a software engineer so fine,
I'll make this website the best of its kind,
I have so many ideas, so much to share,
But alas, I never seem to have the time to spare.

I'll code and design until it's just right,
But when it comes to updating, I'm always in a tight,
My work keeps me busy, always on the go,
And so my portfolio site's progress is always slow.

But fear not, dear visitor, one day it'll be done,
When that day will come, I can't say, not even one,
But I'll keep on dreaming, and scheming too,
And one day, my portfolio site will be as good as new.

So keep on checking, come back and see,
Maybe one day you'll get to know me,
As the one who built the site so fine,
But until then, let's just pretend it's still in its prime.`

export default function Poem() {
    return <p className="whitespace-pre-wrap font-mono text-lg">{poem}</p>
}