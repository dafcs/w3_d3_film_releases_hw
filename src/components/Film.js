const Film = ({name,url}) => {

    return (
    <li className="list-item">
        <a href={url}>{name}</a>
    </li>
    )
}

export default Film;