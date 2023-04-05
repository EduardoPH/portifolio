import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Me from '@/components/partsHome/one/Me'
import Desc from '@/components/partsHome/two/desc'
import WorkExprerience from '@/components/partsHome/three/workExprerience'
import Technologies from '@/components/partsHome/four/technologies'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div className={styles.container}>
      <Me />
      <div className={styles.partTwo}>
        <Desc />
        <WorkExprerience />
        <Technologies />
      </div>
    </div>
  )
}
