/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import BoardPage from 'containers/Board/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from 'global-styles';
import { ThemeProvider as StyledTheme } from 'styled-components';
import { CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core/';
import theme from 'theme';

export default function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <StyledTheme theme={theme}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/b/:idBoard" component={BoardPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </StyledTheme>
      </ThemeProvider>
    </StylesProvider>
  );
}
