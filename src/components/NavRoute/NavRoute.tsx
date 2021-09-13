import {
  Route,
  RouteComponentProps,
  RouteProps,
  StaticContext,
} from "react-router";
import { AppFotter } from "../AppFotter/AppFotter";
import { AppHeader } from "../AppHeader/AppHeader";

type RouterProps = RouteProps & {
  component: React.ComponentType<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    RouteComponentProps<any, StaticContext, unknown>
  >;
};

export const NavRoute: React.FC<RouterProps> = ({
  exact,
  path,
  component: Component,
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <div>
          <AppHeader />
          <Component {...props} />
          <AppFotter />
        </div>
      )}
    />
  );
};
