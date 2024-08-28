const removeFromArray = function (array) {
    // For each argument (after array), check and remove it from array.
    for (i = 1; i < arguments.length; ++i) {
        for (j = 0; j < array.length; ++j) {
            if (array[j] === arguments[i]) {
                // if current item in array is equal to current argument, remove that item.
                array.splice(j, 1);
                // Decrement j so we dont miss the item that just shifted into the place of the removed item.
                --j;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
