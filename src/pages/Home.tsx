interface HomeSection {
  id: string
  heading: string
  paragraphs: string[]
  image: string
}

const SECTIONS: HomeSection[] = [
  {
    id: 'about',
    heading: 'About Me',
    paragraphs: [
      "Hello! I'm Angel Verde-Salas, a grad student studying Applied Mathematics at Texas State University. I recently graduated with my bachelor's in Mathematics, Applied Mathematics, and Computer Science.",
      'My research interests include Mathematical Modeling, Cryptography, Signal Processing, Machine Learning, Functional Analysis, and Field Theory.',
    ],
    image: '/home/placeholder-about.svg',
  },
  {
    id: 'background',
    heading: 'Background',
    paragraphs: [
      "I'm originally from Austin, Texas. I spent my early years in the Rundberg neighborhood before moving to Del Valle, where I have been living for the past 9 years.",
      "I have 4 dogs now (RIP Tiger). They are mixed, and I've had them ever since we came to Del Valle. They are approaching their later years.",
    ],
    image: '/home/placeholder-background.svg',
  },
  {
    id: 'education',
    heading: 'Education',
    paragraphs: [
      'I graduated from Cedar Creek High School before attending Texas State University in 2022 (Go Eagles!).',
      'I originally was only a mathematics major, but my second semester I became a double major in Mathematics and Computer Science. Then I figured out I could pursue a triple major, so I added Applied Mathematics.',
    ],
    image: '/home/placeholder-education.svg',
  },
  {
    id: 'work',
    heading: 'Campus Work',
    paragraphs: [
      'I worked at MathCATS my freshman year, and it was such a fun job. I learnt a lot of math while reinforcing my understanding. Thanks to this job I have strengthened my skills and am confident in my mathematical abilities. It also helped me grow socially.',
      'I also was a UIA (Undergraduate Instructional Assistant) for calculus based labs.',
    ],
    image: '/home/placeholder-work.svg',
  },
  {
    id: 'research',
    heading: 'Research',
    paragraphs: [
      'I did a REU in summer of 2024, which was very fun. It was at Prairie View A&M University, and the experience was unforgettable.',
      'I did research in statistical modeling and data analysis during my REU experience under the guidance of Dr. Wickramasinghe.',
    ],
    image: '/home/placeholder-research.svg',
  },
  {
    id: 'now',
    heading: 'Right Now',
    paragraphs: [
      "As of right now I'm just focusing on personal projects and research till I start my masters. I have been leaning a lot into Computer Science because of its large and young field.",
      'I have a love and hate relationship with Computer Science, but as of lately it has been a lot of admiration for the field. I owe a lot to it and want to explore more.',
    ],
    image: '/home/placeholder-now.svg',
  },
]

function Home() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-muted/20 bg-surface p-8 shadow-sm md:p-10">
        <h1 className="font-heading text-3xl font-semibold text-text">Angel Verde-Salas</h1>
        <p className="mt-2 text-lg text-muted">
          Graduate Student in Applied Mathematics at Texas State University
        </p>
      </div>

      {SECTIONS.map((section) => (
        <section
          key={section.id}
          className="flex flex-col gap-6 rounded-2xl border border-muted/20 bg-surface p-8 shadow-sm md:flex-row md:p-10"
        >
          <div className="flex-1">
            <h2 className="font-heading text-xl font-semibold text-text">{section.heading}</h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="mt-4 text-text">
                {paragraph}
              </p>
            ))}
          </div>
          <img
            src={section.image}
            alt=""
            className="aspect-square w-full rounded-lg object-cover md:w-48 md:shrink-0"
          />
        </section>
      ))}
    </div>
  )
}

export default Home
