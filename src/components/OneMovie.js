import './OneMovie.css'
import { useParams } from 'react-router-dom'

const OneMovie = () => {
    const {movieId} = useParams()
    return <section>
        <h2>{movieId}</h2>
    </section>

  }
  export default OneMovie