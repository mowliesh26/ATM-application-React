import { Route, Routes } from 'react-router';
import Login from './Login/Login';
import { RoutingPart } from './Routing/Routepart';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { PublicRouting } from './Routing/PublicRouting';


import './i18n.js';
import LoadingPhase from './Component/LoadingPhase.jsx';
function App() {
  const selector = useSelector(items => items.loginvalue)
  
  return (
    <div  >

      
      <Routes>
        {selector ?
          RoutingPart.map((route) => {
            let Component = route.component
            return (
              <Route key={route.name} path={route.path}
                element={
                  <>
                    <Suspense fallback={<LoadingPhase/>}>
                      <Component />
                    </Suspense>
                  </>
                }
              />
            )
          })
          :
          PublicRouting.map((route) => {
            let Component = route.component
            return (
              <Route key={route.name} path={route.path}
                element={
                  <>
                    <Suspense fallback={"loading"}>
                      <Component />
                    </Suspense>
                  </>
                }
              />
            )
          })
        }
         
      </Routes>
 
    </div>
  );
}

export default App;
