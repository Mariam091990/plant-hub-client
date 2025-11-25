import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/user/Login";
import Register from "../Pages/user/Register";
import ForgetPassword from "../Pages/user/ForgetPassword";
import AllPlants from "../Pages/AllPlants";
import PrivateRouter from "../provider/PrivateRouter";
import AddPlants from "../Pages/AddPlants";
import MyPlants from "../Pages/MyPlants";
import SecOne from "../components/SecOne";
import SecTwo from "../components/SecTwo";
import PlantDetails from "../Pages/PlantDetails";
import Loading from "../Pages/Loading";
import Update from "../Pages/Update";



const router = createBrowserRouter(

    [
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            children: [


                {
                    index: true,



                    element: <Home></Home>
                },
                {
                    path: '/sectionOne',
                    element: <SecOne></SecOne>

                },
                {
                    path: '/settionTwo',
                    element: <SecTwo></SecTwo>
                }
            ]


        },

        {
            path: '/allplants',
            loader: () => fetch('https://plant-hub-server.vercel.app/plants'),
            element:<PrivateRouter> <AllPlants></AllPlants></PrivateRouter>

        },

        {
            path: '/addplants',
            element: <PrivateRouter>
                <AddPlants></AddPlants>   </PrivateRouter>


        },
        {
            path: '/myplants',
            loader: () => fetch('https://plant-hub-server.vercel.app/plants'),
            element: <PrivateRouter>
                <MyPlants></MyPlants>     </PrivateRouter>



        },

        {
            path: '/update/:id',
            loader:({params})=> fetch (`https://plant-hub-server.vercel.app/plants/${params.id}`),
            // loader: () => fetch('https://plant-hub-server.vercel.app/plants'),
         element: <Update></Update>

        },


        {
            path: '/plantdetails/:id',
            loader: () => fetch('https://plant-hub-server.vercel.app/plants'),
            hydrateFallbackElement: <Loading></Loading>,
            element: <PrivateRouter>
                <PlantDetails></PlantDetails>
            </PrivateRouter>

        },

        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children: [
                {

                    path: '/auth/login',
                    element: <Login></Login>,

                },
                {
                    path: '/auth/register',
                    element: <Register></Register>
                },

                {

                    path: '/auth/forgetPass',
                    element: <ForgetPassword></ForgetPassword>
                }



            ]



        },

        {

            path: "/*",
            element: <ErrorPage></ErrorPage>

        }

    ]);


export default router;