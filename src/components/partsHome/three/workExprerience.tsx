import WorkCard from '@/components/workCard'
import style from './workExprerience.module.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({subsets: ['latin'], weight: ['400']})

export default function WorkExprerience() {
  return (
    <div className={style.container}> 
      <h1 className={`${style.title} ${poppins.className}`}> Work Experience </h1>
      <div className={style.grid}> 
        <WorkCard 
          index={1}
          image={"/save.svg"} 
          subtitle='E-commerce system for the sale of park tickets.'
          title='E-commerce'
        />
        <WorkCard 
          index={2}
          image={"/lamp.svg"} 
          subtitle='Take your client onboard seamlessly by our amazing tool of digital onboard process.'
          title='CIB on the Mobile'
        />
        <WorkCard 
          index={3}
          image={"/coffee.svg"} 
          subtitle='Take your client onboard seamlessly by our amazing tool of digital onboard process.'
          title='CIB on the Mobile'
        />
        <WorkCard 
          index={4}
          image={"/gote.svg"} 
          subtitle='Take your client onboard seamlessly by our amazing tool of digital onboard process.'
          title='CIB on the Mobile'
        />
      </div>
    </div>
  )
}