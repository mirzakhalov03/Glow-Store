// import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import { Button, Checkbox, Form, Input, Flex, Divider } from "antd";
// import { useDispatch } from "react-redux";
// import { login, setGoogleAuthSession } from "../../../redux/slices/auth-slice";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../redux/api/index";
// import { GoogleLogin } from "@react-oauth/google";
import { Auth} from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
// import { supabase } from "../../../redux/api/index";
// import type { FormProps } from "antd";
// import { useEffect } from "react";

// type FieldType = {
//   email?: string;
//   password?: string;
// };







const Login = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event == "SIGNED_IN" ) {
      navigate("/");
    }
    else {
      navigate("/auth");
    }
  })

  

  

  

  return (
    <div className="w-full h-screen bg-[#fbaeb45c]">
      <div className="container flex items-center p-[150px] justify-center">
        <div className="auth__wrapper w-[400px] rounded-xl bg-white p-[30px]">
          {/* <h1 className="text-center text-[30px] font-bold">LOGIN</h1> */}
          <br />
          <Auth
            supabaseClient={supabase}
            providers={["google"]}
            magicLink
            appearance={{ theme: ThemeSupa }}
            // theme="dark"
            />
          {/* <Form
            name="login"
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your Email!" },
                { type: "email", message: "Invalid email!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input your Password!" }]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Flex>
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Log in
              </Button>
              <p className="text-center">
                No account?{" "}
                <a className="text-[dodgerblue]" href="/register">
                  Register now!
                </a>
              </p>
            </Form.Item>

            <Divider>
              <span className="text-[14px] text-[gray]">or</span>
            </Divider>

            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => {
                console.log("Google Login Failed");
              }}
              useOneTap
            />
          </Form> */}
        </div>
      </div>
    </div>
  );
};

export default Login;



// const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
//   console.log("Success:", values);
//   try {
//     localStorage.setItem("login", JSON.stringify(values));
//     const response = await axios.post(
//       "https://eetqcfpyziptmrzwftem.supabase.co/", // Replace this with actual API endpoint
//       values
//     );
//     const data = response.data;
//     console.log(data)

//     localStorage.setItem("token", JSON.stringify(data?.access_token));
//     console.log(data);

//     if (localStorage.getItem("token")) {
//       navigate("/");
//     }
//   } catch (err) {
//     console.log(err);
//   }


//   dispatch(login(values));
// };

// const handleGoogleLogin = async () => {
//   try {
//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//     });

//     if (error) {
//       console.error("Google login error:", error.message);
//       return;
//     }

//     const userData = JSON.parse(localStorage.getItem("sb-eetqcfpyziptmrzwftem-auth-token") || "[]")
//     if(userData?.access_token){
//       // console.log(userData?.access_token)
//       dispatch(login(userData?.access_token));
//     }

//     // Redirect to Google login URL
//     if (data?.url) {
//       console.log(data?.url);
//       dispatch(setGoogleAuthSession(data.url)); 
//       window.location.href = data.url; 
//     }
//   } catch (error) {
//     console.error("Error during Google OAuth:", error);
//   }
// };
