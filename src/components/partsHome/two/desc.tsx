import style from './desc.module.css'
import { Preahvihear} from 'next/font/google'

const preahvihear = Preahvihear({subsets: ['latin'], weight: ['400']})

export default function Desc() {
  return (
    <div className={`${style.container} ${preahvihear.className}`}> 
      <div className={style.whoIam}> 
        <h1> I&apos;'m a Software Developer.| </h1>
        <p> Currently, I&apos;'m a Freelance Software Developer,</p>
      </div>
      <p className={style.desc}> 
        A self-taught software developer, working in the industry for over 2 years.
        I make meaningful and efficient digital products that create a balance
        between user needs and business goals.
      </p>
    </div>
  )
}