
function Search({apiData, setListOfRestaurant}){

    function handleSearch(searchedText){

        setListOfRestaurant(
            apiData.filter((res)=>res.info.name.toLowerCase().includes(searchedText.toLowerCase()))
        )

    }

    return(
        <div className="ml-10 mt-5">
            <input type="text" onChange={(e)=>handleSearch(e.target.value)} className="border" placeholder="Please search here" />
        </div>
    )

}

export default Search;