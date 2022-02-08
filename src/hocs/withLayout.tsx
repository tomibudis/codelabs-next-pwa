import React from "react";
import { withRouter } from "next/router";
import type { Router } from "next/router";

import { Sidebar, Navbar } from "#components/index";

type PropsWithRouter = {
  router: Router;
};

interface Setting {
  blacklist: string[];
}

function withLayout<T>(
  WrappedComponent: React.ComponentType<T>,
  setting: Setting
) {
  const WithLayout = (props: PropsWithRouter & T) => {
    const pathname = props.router.asPath;
    if (
      setting.blacklist.length &&
      setting.blacklist.includes(pathname.slice(1, pathname.length))
    ) {
      return <WrappedComponent {...(props as T)} />;
    }
    return (
      <div className="d-flex flex-column vh-100">
        <div className="d-flex flex-shrink-0">
          <Navbar />
        </div>
        <div className="d-flex flex-fill bg-primary overflow-auto">
          <Sidebar />
          <div className="d-flex flex-column flex-fill overflow-auto">
            <WrappedComponent {...(props as T)} />
          </div>
        </div>
      </div>
    );
  };
  return withRouter(WithLayout);
}

export default withLayout;
