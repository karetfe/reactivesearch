import React, { Component } from "react";
import { ReactiveBase, DataSearch, CategorySearch } from "@appbaseio/reactivesearch";

import theme from "./styles/theme";

import Header from "./components/Header";
import Results from "./components/Results";

import Container from "./styles/Container";
import Flex, { FlexChild } from "./styles/Flex";

const App = () => (
	<Container>
		<ReactiveBase
			app="gitxplore-latest"
			credentials="W7ZomvYgQ:df994896-a25d-4d4e-8724-e26659b93001"
			theme={theme}
		>
			<Flex>
				<FlexChild flex={1}>
					<Header />
				</FlexChild>
				<FlexChild flex={3}>
					<CategorySearch
						componentId="repo"
						dataField={["name", "description", "name.raw", "fullname", "owner", "topics"]}
						categoryField="language.raw"
						queryFormat="and"
						placeholder="Search Repos"
						URLParams={true}
					/>
					<Results />
				</FlexChild>
			</Flex>
		</ReactiveBase>
	</Container>
);

export default App;
