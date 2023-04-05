import Image from 'next/image'
import style from './imagecircle.module.css'

interface Props {
  src: string;
  width?: number;
  height?: number;
}

export default function ImageCircle({src, height = 25, width = 26}:Props) {
  return (
    <div className={style.container}>
      <Image  
        className={style.image}
        src={src}
        width={width}
        height={height}
        alt=''
      />
    </div>
  )
}