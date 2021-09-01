import { useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
export default withRouter(ScrollToTop);
