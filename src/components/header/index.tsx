import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from "next/image";
import style from './header.module.css';

const plusJacarta = Plus_Jakarta_Sans({subsets: ['latin']})

export function Header() {
  return (
    <header className={style.header}>
     <div className={style.container}>
      <div className={style.partOne}> 
          <Image 
          src={"/Logo.svg"}
          alt=""
          width={48}
          height={38}
          />
        </div>
        <div className={style.partTwo}>
          <p className={plusJacarta.className}>Home</p>
          <p className={plusJacarta.className}>About</p>
          <p className={plusJacarta.className}>Lab</p>
        </div>
     </div>
     
    </header>
  )
} 