import Film from './Film'

const FilmList = ({films}) => {

    const items = films.map(film=>{
        return (
            <Film key={film.id} name={film.name} url={film.url}/>
        )})

    return (
        <>
        {items}
        </>
    )
}

export default FilmList