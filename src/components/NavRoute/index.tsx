import {
  Route,
  RouteComponentProps,
  RouteProps,
  StaticContext,
} from "react-router";
import AppFotter from "@components/AppFotter";
import AppHeader from "@components/AppHeader";

type RouterProps = RouteProps & {
  component: React.ComponentType<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    RouteComponentProps<any, StaticContext, unknown>
  >;
  navbarTransparent?: boolean;
};

const NavRoute: React.FC<RouterProps> = ({
  exact,
  path,
  component: Component,
  navbarTransparent,
  ...props
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <div>
          <AppHeader transparent={navbarTransparent} />
          <Component {...props} />
          <AppFotter />
        </div>
      )}
      {...props}
    />
  );
};

export default NavRoute;
