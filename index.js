// Code your solution here
function findMatching(SearchArray, searchData){
    let filteredArray = SearchArray.filter(data => data.toLowerCase() == searchData.toLowerCase());
    return filteredArray;
}
function fuzzyMatch(SearchArray, searchData){
    let filteredArray = SearchArray.filter(data => {
        return (data.startsWith(searchData));
    });
        
    return filteredArray;
}
 function matchName(SearchArray, searchData){
    let filteredArray = SearchArray.filter(data => {
        return (data.name === searchData);
    });
    return filteredArray;
 }

 