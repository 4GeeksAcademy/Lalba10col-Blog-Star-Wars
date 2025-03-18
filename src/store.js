export const initialStore = () => {
  return {
    people: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_people_data':

      const { results } = action.payload;

      return {
        ...store,
        people: [...results]
      }
    case 'add_to_favorite':
      const { uid, name } = action.payload;
      return {
        ...store,
        favorites: [...store.favorites, { uid: uid, name: name }]
      }
    default:
      throw Error('Unknown action.');
  }
}