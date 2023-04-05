import Image from 'next/image'
import style from './me.module.css'
import { Preahvihear} from 'next/font/google'

const preahvihear = Preahvihear({subsets: ['latin'], weight: ['400']})


export default function Me() {
  return (
    <div className={style.container}>
      <div className={style.boxImage}>
        <div className={style.shadownWhite}>
          <Image 
            src='/me.svg'
            width={253}
            height={253}
            alt=''
            className={style.imageMe}
          />
          <Image 
            src='/Arrow.svg'
            width={135}
            height={130}
            alt=''
            className={style.arrow}
          /> 
        </div>
        
      </div>
      <div className={style.boxTwo}>
        <p className={`${style.name} ${preahvihear.className}`}> Hello! I Am <span> Eduardo Mendes </span></p>
        <div className={style.boxCaracters}>
          <p className={`${style.titleOne} ${preahvihear.className}`}> A developer who </p>
          <h1 className={`${style.titleTwo} ${preahvihear.className}`}> 
          Judges a  book <br/>  by its
          <span> 
          <svg width="189" height="61" viewBox="0 0 189 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M187.834 22.8917C188.145 26.6388 185.974 30.5091 181.553 34.3141C177.143 38.1101 170.577 41.7649 162.317 45.0706C145.803 51.6797 122.63 56.8506 96.7164 59.0013C70.803 61.152 47.0947 59.872 29.7171 56.0757C21.0252 54.1769 13.946 51.6547 8.97024 48.6377C3.98279 45.6135 1.20372 42.154 0.892726 38.4069C0.581735 34.6598 2.75246 30.7895 7.17313 26.9845C11.5834 23.1885 18.15 19.5337 26.4099 16.228C42.9239 9.61891 66.0968 4.44802 92.0102 2.29732C117.924 0.146631 141.632 1.42659 159.009 5.22285C167.701 7.12166 174.781 9.64389 179.756 12.6609C184.744 15.6851 187.523 19.1446 187.834 22.8917Z" stroke="white"/>
          </svg>

          &ensp;cover 
          </span>
          ...
          
          </h1>
          <p className={`${style.subtitle} ${preahvihear.className}`}> Because if the cover does not impress you what else can? </p>
        </div>
      </div>
    </div>
  )
}