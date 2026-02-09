import ModernCarousel from './ModernCarousel'
import { heroImages } from '../../db/db'

const InterbankCarousel = () => {
    return <ModernCarousel slides={heroImages} autoPlayDuration={5000} />
}

export default InterbankCarousel
