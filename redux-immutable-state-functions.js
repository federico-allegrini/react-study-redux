// Updating nested state: state.first.second[someId].fourth
function updateVeryNestedField(state, action) {
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.someId]: {
          ...state.first.second[action.someId],
          fourth: action.someValue,
        },
      },
    },
  };
}

// Inserting Items in Arrays
// V1
function insertItem(array, action) {
  return [
    ...array.slice(0, action.index),
    action.item,
    ...array.slice(action.index),
  ];
}
// Removing Items in Arrays
// V1
function removeItem(array, action) {
  return [...array.slice(0, action.index), ...array.slice(action.index + 1)];
}

// Inserting Items in Arrays
// V2
function insertItem(array, action) {
  let newArray = array.slice();
  newArray.splice(action.index, 0, action.item);
  return newArray;
}
// Removing Items in Arrays
// V2
function removeItem(array, action) {
  let newArray = array.slice();
  newArray.splice(action.index, 1);
  return newArray;
}

// Removing Items in Arrays
// V3
function removeItem(array, action) {
  return array.filter((item, index) => index !== action.index);
}

// Updating an Item in an Array
function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      // This isn't the item we care about - keep it as-is
      return item;
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...action.item,
    };
  });
}

// Immutable Update Utility Libraries
// dot-prop-immutable
state = dotProp.set(state, `todos.${index}.complete`, true);

// immutability-helper
var collection = [1, 2, { a: [12, 17, 15] }];
var newCollection = update(collection, {
  2: { a: { $splice: [[1, 1, 13, 14]] } },
});
