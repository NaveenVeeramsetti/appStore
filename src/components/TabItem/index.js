// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, activeTabDetails, isActive} = props
  const {displayText, tabId} = tabDetails

  const isActiveTab = isActive ? `add-style button` : `add-style`

  const onClickTab = () => {
    activeTabDetails(tabId)
  }

  return (
    <li className="tab-item-list">
      <button className={isActiveTab} type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
