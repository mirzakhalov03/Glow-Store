// import type { FormProps } from "antd";
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { Button, Checkbox, Form, Input, Flex, Divider } from "antd";
// import { FcGoogle } from "react-icons/fc"; 
// import { GoogleLogin } from '@react-oauth/google';
// import { useState } from "react";
// import { supabase } from "../../../redux/api/index";



// const Register = () => {
  

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   // const handleRegister = async (e: any) => {
    
//   //   const { error } = await supabase.auth.signUp({
//   //     email,
//   //     password,
//   //     options: {
//   //       data: {
//   //         first_name: e.first_name,
//   //       }
//   //     }
//   //   });

//   //   if (error) {
//   //     setMessage(`Error: ${error.message}`);
//   //   } else {
//   //     setMessage('Registration successful! Check your email for verification.');
//   //     console.log(message)
//   //   }
//   // };

//   // const handleGoogleLogin = async () => {
//   //   const { error } = await supabase.auth.signInWithOAuth({
//   //     provider: 'google',
//   //   });
    
//   //   if (error) {
//   //     console.error('Google login error:', error.message);
//   //   }
//   // };

  

//   return (
//     <div className="w-full h-screen  bg-[#fbaeb45c]">
//       <div className="container flex items-center p-[150px] justify-center">
//         <div className="auth__wrapper w-[400px] h-[400x] rounded-xl bg-[white] p-[30px]">
//           <h1 className="text-center text-[30px] font-bold">Register</h1>
//           <br />
//           <Form
//             name="login"
//             initialValues={{ remember: true }}
//             style={{ maxWidth: 360 }}
//             onFinish={handleRegister}
//           >
//             <Form.Item
//               name="first_name"
//               rules={[{ required: true, message: 'Please input your First Name!' }]}
//             >
//               <Input prefix={<UserOutlined />} placeholder="First name"  />
//             </Form.Item>
//             <Form.Item
//               name="email"
//               rules={[
//                 { required: true, message: "Please input your Email!" },
//                 { required: true, type: "email", message: "Invalid email!" },
//               ]}
//             >
//               <Input prefix={<UserOutlined />} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
//             </Form.Item>
//             <Form.Item
//               name="password"
//               rules={[
//                 { required: true, message: "Please input your Password!" },
//               ]}
//             >
//               <Input
//                 prefix={<LockOutlined />}
//                 type="password"
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)} 
//               />
//             </Form.Item>
//             <Form.Item>
//               <Flex justify="space-between" align="center">
//                 <Form.Item name="remember" valuePropName="checked" noStyle>
//                   <Checkbox>Remember me</Checkbox>
//                 </Form.Item>
//               </Flex>
//             </Form.Item>

//             <Form.Item>
//               <Button block type="primary" htmlType="submit">
//                 Register
//               </Button>
//               <p className='text-center'>Already in? <a className='text-[dodgerblue]' href="/login">Log in!</a></p>
//             </Form.Item>
//             <Divider><span className='text-[14px] text-[gray]'>or</span></Divider>
//             <GoogleLogin
//             onSuccess={handleGoogleLogin}
//             onError={() => {
//               console.log('Google Login Failed');
//             }}
//             useOneTap
//           />
//           </Form>

          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
