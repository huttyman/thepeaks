import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import HomeScreen from "./screens/homeScreen";
import NewsScreen from "./screens/newsScreen";
import ArticleScreen from "./screens/articleScreen";
import BookmarkScreen from "./screens/bookmarkScreen";

library.add(fab, fas);
function App() {
    const [searchText, setSearchText] = useState("");

    const seachTextHandle = (text) => {
        setSearchText(text);
    };
    return (
        <div className='App'>
            <Router>
                <Header seachTextHandle={seachTextHandle} />
                <Switch>
                    <Route path='/' exact>
                        {searchText === "" && <HomeScreen />}
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/sport'>
                        {searchText === "" && (
                            <NewsScreen section='sport' title='Sport' />
                        )}
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/culture'>
                        {searchText === "" && (
                            <NewsScreen section='culture' title='Culture' />
                        )}
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/lifestyle'>
                        {searchText === "" && (
                            <NewsScreen
                                section='lifeandstyle'
                                title='Lifestyle'
                            />
                        )}
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/article/:idtexturl'>
                        {searchText === "" && <ArticleScreen />}
                    </Route>
                </Switch>

                <Switch>
                    <Route path='/bookmarks'>
                        {searchText === "" && <BookmarkScreen />}
                    </Route>
                </Switch>
                {searchText !== "" && (
                    <NewsScreen
                        searchText={searchText}
                        title='Search'
                        noInfiniteLoop
                    />
                )}
            </Router>
        </div>
    );
}

export default App;
