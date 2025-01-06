export const Filter = ({setShowEmergencyOnly, setSearchTerms}) => {
    return <div className="filter-bar">
            <button className="filter-btn btn-primary" onClick={() => {setShowEmergencyOnly(true)}}>Emergency!</button>
            <button className="filter-btn btn-secondary" onClick={() => {setShowEmergencyOnly(false)}}>Show All</button>
            <input 
            onChange={(event) => {
                setSearchTerms(event.target.value)
            }}
            type="text" 
            placeholder="Search tickets"
            className="ticket-search"
            />
          </div>
}