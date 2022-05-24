import './index.css'

const CountriesOfVisited = props => {
  const {data, onChangeVisited} = props
  const {id, name, imageUrl} = data

  const onRemoveVisited = () => {
    onChangeVisited(id)
  }

  return (
    <li className="visited-list">
      <img className="image" src={imageUrl} alt="thumbnail" />
      <div className="container-row-countries">
        <p className="paragraph-countries">{name}</p>
        <button
          onClick={onRemoveVisited}
          type="button"
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountriesOfVisited
