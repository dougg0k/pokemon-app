import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import Routes from "./Routes";

const client = new ApolloClient({
	uri: "https://pokemon-samdavies.stylindex.now.sh"
});

const GlobalStyle = createGlobalStyle`
  body {
		margin: 0;
		padding: 0;
		font-family: 'Roboto', sans-serif;
  }
`;

ReactDOM.render(
	<ApolloProvider client={client}>
		<GlobalStyle />
		<Routes />
	</ApolloProvider>,
	document.getElementById("root")
);
