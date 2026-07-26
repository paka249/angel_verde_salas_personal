import Carousel from '../components/Carousel'
import { hobbyImages } from '../data/hobbies'

function Hobbies() {
  return (
    <div>
      <div className="rounded-2xl border border-muted/20 bg-surface p-8 shadow-sm md:p-10">
        <h1 className="font-heading text-2xl font-semibold text-text">Hobbies</h1>
        <p className="mt-6 max-w-xl text-text">
          Replace this placeholder with whatever you want to share here — hobbies,
          interests, side projects that don't fit elsewhere.
        </p>
      </div>
      <div className="mt-8">
        <Carousel images={hobbyImages} />
      </div>
    </div>
  )
}

export default Hobbies
