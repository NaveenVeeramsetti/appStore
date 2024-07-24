// Write your code here
import './index.css'

const AppItem = props => {
  const {appItemDetails} = props
  const {appName, imageUrl} = appItemDetails

  return (
    <li className="app-list-item">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="image-name">{appName}</p>
    </li>
  )
}

export default AppItem
