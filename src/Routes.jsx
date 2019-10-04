import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PokemonInformationContainer from "./containers/PokemonInformationContainer";
import PokemonListingContainer from "./containers/PokemonListingContainer";

export default () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={PokemonListingContainer} exact />
				<Route path="/more/:id" component={PokemonInformationContainer} exact />
				<Redirect from="*" to="/" />
			</Switch>
		</BrowserRouter>
	);
};
