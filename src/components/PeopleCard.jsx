import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'
import "/workspaces/Lalba10col-Blog-Star-Wars/src/index.css"

const PeopleCard = ({ item }) => {

  const { dispatch } = useGlobalReducer();

  const addToFavorites = (id, name) => {


    dispatch({ type: 'add_to_favorite', payload: { "uid": id, "name": name } })
  };

  return (
    <div className="card people-card">
      <img src="https://picsum.photos/400/200" className="card-img-top" alt="People card" />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">
          Gender: Male <br></br>
          Hair-Color: Blond <br></br>
          Eye-Color: Blue <br></br>
        </p>
        <div className="button-container">
          <a href="#" className="btn btn-outline-primary mt-4">Learn more!!</a>
          <a href="#" className="btn btn-outline-warning mt-4">
            <i className="fa-regular fa-heart" onClick={() => {
              addToFavorites(item.uid, item.name);
            }}></i>
          </a>
        </div>
      </div>
    </div>

  )
}

export default PeopleCard