import Image, { StaticImageData } from 'next/image'
import style from './index.module.css'
import { Poppins} from 'next/font/google'
import Module from 'module'

const poppins = Poppins({subsets: ['latin'], weight: ['500', '600']})

interface Props {
  image: string | StaticImageData
  title: string,
  subtitle: string,
  index: number
  link?: string
}

function CalcLinearGradient(index:number) {
  let linear;
  switch(index) {
    case 1: 
      linear = 'linear-gradient(110.49deg, #130428 19.95%, #251043 67.64%, #38126D 107.08%, #261045 156.61%, #190634 183.21%)'
      break;
    case 2: 
      linear = 'linear-gradient(95.56deg, #130428 0.58%, #251043 16.32%, #38126D 29.33%, #261045 45.66%, #190634 54.44%)'
      break;
    case 3: 
      linear = 'linear-gradient(95.56deg, #130428 0.58%, #251043 16.32%, #38126D 29.33%, #261045 45.66%, #190634 54.44%)'
      break;
    case 4: 
      linear = 'linear-gradient(149.88deg, #130428 37.22%, #251043 70.43%, #38126D 97.89%, #261045 132.38%, #190634 150.9%)'
      break;
  }

  return linear;
}

export default function WorkCard({image, link, subtitle, title, index}: Props) {
  return (
    <div
      className={style.container}
      style={{background:CalcLinearGradient(index) }}> 
      <Image 
        width={122}
        height={115}
        alt=''
        src={image}
      />
      <div className={style.partTwo}> 
        <h1 className={`${poppins.className} ${style.title}`}> {title} </h1>
        <p className={`${poppins.className} ${style.subtitle}`}> {subtitle} </p>
        <button className={`${poppins.className} ${style.button}`}> 
          LEARN MORE
        </button>
      </div>
    </div>
  )
}