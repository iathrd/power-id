import AppFotter from "@components/shared/AppFotter";
import AppHeader from "@components/shared/AppHeader";
import {
  Route,
  RouteComponentProps,
  RouteProps,
  StaticContext,
} from "react-router";

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
