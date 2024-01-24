// Function to filter data based on search text
function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
  }