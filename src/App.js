import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import { StyledNavLink, StyledNavList, StyledNavListItem } from "./styled";

export default () => (
  <HashRouter>
    <nav>
      <StyledNavList>
        <StyledNavListItem>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </StyledNavListItem>
        <StyledNavListItem>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </StyledNavListItem>
      </StyledNavList>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania">
          </Redirect>
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);