import { Suspense } from "react";
import TopBarProgress from "react-topbar-progress-indicator";
const Loadable = (Comonent: any) => (props: any) => {
  return (
    <Suspense fallback={<TopBarProgress></TopBarProgress>}>
      <Comonent {...props}></Comonent>
    </Suspense>
  );
};

export default Loadable;
