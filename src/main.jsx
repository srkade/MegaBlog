import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AllPosts, AuthLayout, Login, Signup,AddPost, EditPost,Post } from './components/index.js'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path:'/',
        element:<Home/>,

      },
      {
        ptah:'/login',
        element:(
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        ptah:'/signup',
        element:(
          <AuthLayout authentication={false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        ptah:'/all-posts',
        element:(
          <AuthLayout authentication={""}>
            <AllPosts/>
          </AuthLayout>
        )
      },
      {
        ptah:'/add-post',
        element:(
          <AuthLayout authentication={""}>
            <AddPost/>
          </AuthLayout>
        )
      },
      {
        ptah:'/edit-post/:slug',
        element:(
          <AuthLayout authentication={""}>
            <EditPost/>
          </AuthLayout>
        )
      },
      {
        ptah:'/post',
        element:<Post/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
