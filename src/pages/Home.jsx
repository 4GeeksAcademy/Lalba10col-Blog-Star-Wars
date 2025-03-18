import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import PeopleCard from "../components/PeopleCard.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();


	const getPeople = async () => {

		try {
			const response = await fetch('https://www.swapi.tech/api/people');

			if (!response.ok) {
				throw new Error("Ocurrió un error al llamar el endpoint 'people' ");
			}

			const data = await response.json();

			dispatch({ type: 'set_people_data', payload: data })


		} catch (error) {
			console.log(error);
		}
	};



	useEffect(() => {
		getPeople();
	}, []);
	return (
		<div className="text-danger mt-5 mx-5">
			<h1>Characters</h1>
			<div
				className="scroll-container"
			>
				{store.people.length > 0 ? (
					store.people.map((item) => (
						<PeopleCard key={item.uid} item={item} />
					))
				) : (
					<p>Cargando personajes...</p>
				)}
			</div>
		</div>
	);
};















// 			{store.people.map((item, index) => {

// 				return <PeopleCard key={item.uid} item={item} />
// 			})}
// 		</div>
// 	);
// }; 