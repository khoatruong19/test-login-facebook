import FacebookLogin, { FacebookLoginClient } from '@greatsumini/react-facebook-login'
import './App.css'


// const clientId = "674406797855-n6am3392nlr8dvlmugf3cepu8p3rs8fg.apps.googleusercontent.com"

// type Props = {
//   onClick: any
//   onLogoutClick: any
// }

// const CustomComponent  = ({onClick, onLogoutClick}: Props) => (
//   <>
//     <button onClick={onClick}>Login with Facebook</button>
//     <button onClick={onLogoutClick(function (response) {
//       // if ('connected' === response.status) {
//       //   console.log("Logout")
//       //   window.location.href = '/';
//       // } else {
//       //   console.log('There has been an error.');
//       // }
//     }, {
//       access_token: "EAAMTswOcD7sBAAJVw635pLlkRjVBJEgVXNna2pDco2wEDyNbWPYqqIdBpJvCzVbNAOQLguf85ZCp1lLeG2m3jho2Xy3TAkU7QLZCfpRIMLoReZBvaMmT4SjX6UZALKa80bNW3d3qUK1OZCfQC6BwbyhHccaxejViOXe5Kc15TTJxRr5KEY51NnaE9iF6QdZAT2GL8gIPDtplU0OjOUX19sIrbLHjzsrR8ZD"
//     })}>Logout</button>
//   </>
// )

// console.log(window.FB)

function App() {
  // const [count, setCount] = useState(0)
  // const [data, setData] = useState(null)
  // const [accessToken, setAccessToken] = useState("")

  //   const handleGoogleLogin = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:4000/auth/google/login")
  //       console.log({ res })
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   FB.getLoginStatus(function(response) {
  //     statusChangeCallback(response);
  // });

//   async function login() {
//     FacebookLoginClient.login((res) => {
//       console.log(res);
//     });
// }

function logout() {
  // revoke app permissions to logout completely because FB.logout() doesn't remove FB cookie
  FacebookLoginClient.logout((res) => {
    console.log('logout completed!', res);
  });
}
return (
  <>

    <FacebookLogin
      appId="866084510764987"
      onSuccess={(response) => {
        console.log('Login Success!', response);
      }}
      onFail={(error) => {
        console.log('Login Failed!', error);
      }}
      onProfileSuccess={(response) => {
        console.log('Get Profile Success!', response);
      }}
    // render={({ onClick, logout }) => (
    //   <CustomComponent onClick={onClick} onLogoutClick={logout} />
    // )}
    />
    {/* <button onClick={login}>Login</button> */}
    <button onClick={logout}>Logout</button>
  </>
)
}

export default App
