import React, { useState, useEffect, FC } from "react";
import { AppProvider } from "./context/context";
import "./App.css";
import { LoaderPage } from "./components/features/loaderPage/LoaderPage";
import { Matches } from "./components/features/matches/Matches";
import { createApiClient, Match } from "./api";
import { Search } from "./components/features/search/Search";
import { DropDown } from "./components/features/dropDown/DropDown";
import { PaginationPage } from "./components/features/pagination/PaginationPage";
import Switch from "@mui/material/Switch";
interface ICounter {
	approve: Number;
	decline: Number;
}

const App: React.FC = () => {
	const [search, setSearch] = useState<string>("");
	const [matches, setMatches] = useState<Array<Match> | void>([]);
	const [page, setPage] = useState<Number>(1);
	const [filterChoice, setFilterChoice] = useState<string>("Company-name");
	const [counter, setCounter] = useState<ICounter>({ approve: 0, decline: 0 });
	const [theme, setTheme] = useState(false);

	const fetchMatches = async () => {
		const cardsFromServer: Array<Match> | void = await createApiClient(page);
		setMatches(cardsFromServer);
	};
	const changeTheme = () => {
		if (theme) document.body.style.background = "#FFF";
		else document.body.style.background = "#000";
		setTheme(!theme);
	};

	useEffect(() => {
		fetchMatches();
	}, [page]);

	return (
		<AppProvider
			value={{
				page,
				setPage,
				filterChoice,
				setFilterChoice,
				matches,
				setMatches,
				counter,
				setCounter,
				theme,
			}}
		>
			<main className={`app-container ${theme && "dark"}`}>
				<h1 className="app-header">Matches List</h1>
				<Switch onChange={() => changeTheme()} name="loading" color="primary" />

				<DropDown />
				<Search search={search} setSearch={setSearch} />
				{matches ? (
					<Matches matches={matches} search={search} />
				) : (
					<LoaderPage />
				)}

				<PaginationPage />
			</main>
		</AppProvider>
	);
};
export default App;
