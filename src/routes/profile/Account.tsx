import { Input, Form, Button } from "antd"
import Nav from "../../components/nav/Nav"
// import type { DatePickerProps } from 'antd';
import { useState, useEffect } from "react";
// import type { GetProps } from 'antd';
// import dayjs from 'dayjs';
import "./account.scss"

// type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;



    import { createClient } from '@supabase/supabase-js';

    const supabaseUrl = 'https://eetqcfpyziptmrzwftem.supabase.co'; 
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVldHFjZnB5emlwdG1yendmdGVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4ODc4NTMsImV4cCI6MjA0MzQ2Mzg1M30.yL4A8waZ1JIXmBohwn17Uy7jH24UwVQKjOsAkvXmPag'; 

    export const supabase = createClient(supabaseUrl, supabaseAnonKey);



const Account = () => {
    const [user, setUser] = useState<any>({});
    const [cardNumber, setCardNumber] = useState<any>({});
    const [cardName, setCardName] = useState<any>({});
    const [cardExpiry, setCardExpiry] = useState<any>({});
    const [cardCvv, setCardCvv] = useState<any>({});

    // const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    //     console.log(date, dateString);
    // };

    useEffect (() => {
        async function getUser() {
        await supabase.auth.getUser().then((value) => {
            if (value.data?.user) {
            setUser(value.data.user);
            localStorage.setItem("user", JSON.stringify(value.data.user));
            }
        })
        }

        getUser();
    }, []);
    // const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    //     return current && current < dayjs().endOf('day');
    //   };

      const handleCardDetails = () => {
        console.log("card details", {cardNumber, cardName, cardExpiry, cardCvv});
      }


  return (
    <>
        <Nav/>
        <br />
        <div className="accountMob w-[80%] mx-auto min-h-[600px] rounded-xl bg-[#fbf4f4] shadow-xl flex py-10 px-10 gap-8 items-center">
            <div className="w-[50%] halfMob profileMob display flex justify-center">
                <div className="w-[300px] h-[300px] rounded-full overflow-hidden bg-lime-400 p-2">
                    <div className="w-full h-full rounded-full">
                        {
                            user?.user_metadata?.picture 
                            ?
                            <img src={user?.user_metadata?.picture.replace("s96-c", "s384-c", true)} className="w-full h-full rounded-full" alt="" />
                            :
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="w-full h-full rounded-full" alt="" />
                        }
                    </div>
                </div>
            </div>
            <div className="w-[50%] halfMob h-full  p-2">
                <span>
                    <p className="text-[#847a7a]">First Name:</p>
                    <h2 className="text-[dodgerblue] text-2xl">{user?.user_metadata?.full_name.split(" ")[0]}</h2>
                </span>
                <br />
                <span className="">
                    <p className="text-[#847a7a]">Last Name:</p>
                    <h2 className="text-[dodgerblue] text-2xl">{user?.user_metadata?.full_name.split(" ")[1]}</h2>
                </span>
                <br />
                <span className="email">
                    <p className="text-[#847a7a] ">Email: </p>
                    <h2 className="text-[dodgerblue] text-2xl">{user?.email}</h2>
                </span>
                <br />
                <hr />
                <span>
                    <p className="text-[#847a7a] mt-[15px] text-center">Enter your card details</p>
                </span>
                <Form onFinish={() => handleCardDetails()}>
                    <span className="flex flex-col">
                        <small>*Card Numbers</small>
                        <Input
                            className="w-[300px] cardNumber"
                            placeholder="0000 0000 0000 0000"
                            maxLength={19} // 16 digits + 3 spaces
                            onChange={(e) => {
                                const value = e.target.value
                                .replace(/\D/g, '') // Remove non-digits
                                .replace(/(\d{4})(?=\d)/g, '$1 '); // Add space every 4 digits
                                setCardNumber(value);
                            }}
                            />
                    </span>
                    <span className="flex gap-10 mt-2">
                        <span className="flex flex-col">
                            <small>*Expiry Date</small>
                            <Input
                                className="w-[150px] date"
                                placeholder="MM/YY"
                                onChange={(e) => setCardExpiry(e.target.value)}
                                maxLength={5}
                                onInput={(e) => {
                                    e.target = e.target
                                }}
                                />
                        </span>
                        <span className="flex flex-col">
                            <small>*CVV</small>
                            <Input onChange={(e) => setCardCvv(e.target.value)} maxLength={3} className="w-[80px] tel" type="number" placeholder="000" />
                        </span>
                    </span>
                    <span className="flex flex-col mt-2">
                        <small>*Full Name</small>
                        <Input onChange={(e) => setCardName(e.target.value)} className="w-[90%]" type="text" placeholder="Full Name"/>
                    </span>
                    <br />
                    <Button onSubmit={() => handleCardDetails()} className="w-[90%]" type="primary">Add Card Details</Button>
                </Form>
            </div>
        </div>
    
    </>
  )
}

export default Account

