import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { inspienTheme, partnerTheme, customerTheme } from "./theme";
import GlobalStyle from "./GlobalStyle"
import Layout from "layouts/layout";
import Login0 from "pages/main/login0";
import Login1 from "pages/main/login1";
import Login2 from "pages/main/login2";
import Login3 from "pages/main/login3";
import Login4 from "pages/main/login4";
import Login4_1 from "pages/main/login4_1";
import Login5 from "pages/main/login5";
import Login6 from "pages/main/login6";
import Join1 from "pages/main/join1";
import Join2 from "pages/main/join2";
import Join3 from "pages/main/join3";
import Join3_1 from "pages/main/join3_1";
import Join4 from "pages/main/join4";
import Member1 from "pages/main/member1";
import Member2 from "pages/main/member2";
import Member3 from "pages/main/member3";
import Member4 from "pages/main/member4";
import Member5 from "pages/main/member5";
import Member6 from "pages/main/member6";
import Member7 from "pages/main/member7";
import Member8 from "pages/main/member8";
import Main1 from "pages/main/main1";
import Main2 from "pages/main/main2";
import Main3 from "pages/main/main3";
import Main4 from "pages/main/main4";
import Main5 from "pages/main/main5";
import Dashboard1 from "pages/dashboard/dashboard_inspien1";
import Dashboard2 from "pages/dashboard/dashboard_inspien2";
import Dashboard3 from "pages/dashboard/dashboard_inspien3";
import Dashboard4 from "pages/dashboard/dashboard_partner1";
import Dashboard5 from "pages/dashboard/dashboard_partner2";
import Dashboard6 from "pages/dashboard/dashboard_customer1";
import Dashboard7 from "pages/dashboard/dashboard_customer2";
import Dashboard8 from "pages/dashboard/dashboard_customer3";
import User1 from "pages/user/user1";
import User2 from "pages/user/user2";
import User3 from "pages/user/user3";
import User4 from "pages/user/user4";
import User5 from "pages/user/user5";
import User6 from "pages/user/user6";
import User7 from "pages/user/user7";
import User8 from "pages/user/user8";
import Cart1 from "pages/cart/cart1";
import Cart2 from "pages/cart/cart2";
import Cart3 from "pages/cart/cart3";
import Cart4 from "pages/cart/cart4";
import Cart5 from "pages/cart/cart5";
import Cart6 from "pages/cart/cart6";
import Cart7 from "pages/cart/cart7";
import Myinfo1 from "pages/mypage/myinfo1";
import Myinfo2 from "pages/mypage/myinfo2";
import Myinfo3 from "pages/mypage/myinfo3";
import UseProduct1 from "pages/mypage/use_product1";
import UseProduct2 from "pages/mypage/use_product2";
import UseProduct3 from "pages/mypage/use_product3";
import UseProduct4 from "pages/mypage/use_product4";
import OrderList1 from "pages/mypage/order_list1";
import OrderList2 from "pages/mypage/order_list2";
import OrderDetail from "pages/mypage/order_detail";
import Mileage from "pages/mypage/mileage";
import Store1 from "pages/store/store1";
import Store2 from "pages/store/store2";
import Store3 from "pages/store/store3";
import Store4 from "pages/store/store4";
import Detail from "pages/store/detail";
import Detail1 from "pages/store/detail1";
import Detail2 from "pages/store/detail2";
import Detail3 from "pages/store/detail3";
import Detail4 from "pages/store/detail4";
import Detail5 from "pages/store/detail5";
import Detail6 from "pages/store/detail6";
import Detail7 from "pages/store/detail7";
import Detail8 from "pages/store/detail8";
import Detail9 from "pages/store/detail9";
import Detail10 from "pages/store/detail10";
import Detail11 from "pages/store/detail11";
import Detail12 from "pages/store/detail12";
import Detail13 from "pages/store/detail13";
import Detail14 from "pages/store/detail14";
import Invoice from "pages/receipt/invoice";
import Invoice1 from "pages/receipt/invoice1";
import Invoice2 from "pages/receipt/invoice2";
import InvoiceCustomer from "pages/receipt/invoice_customer";
import Sales from "pages/receipt/sales";
import SalesHistory from "pages/receipt/sales_history";
import NotFound from "pages/not_found";
import Error403 from "pages/403";
import Error500 from "pages/500";
import QnaList from "pages/service/qna_list";
import QnaDetail from "pages/service/qna_detail";
import QnaWrite from "pages/service/qna_write";
import CustomerList from "pages/service/customer_list";
import CompanyDetail from "pages/service/company_detail";
import UserDetail from "pages/service/user_detail";
import Usage from "pages/service/usage";
import ExamplePage from "components/Example";

function App() {
    //inspienTheme, partnerTheme, customerTheme
    const userType = inspienTheme;
    const [theme, setTheme] = useState(userType);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Login0 />} />
                        <Route path="/main/login1" element={<Login1 />} />
                        <Route path="/main/login2" element={<Login2 />} />
                        <Route path="/main/login3" element={<Login3 />} />
                        <Route path="/main/login4" element={<Login4 />} />
                        <Route path="/main/login4_1" element={<Login4_1 />} />
                        <Route path="/main/login5" element={<Login5 />} />
                        <Route path="/main/login6" element={<Login6 />} />
                        <Route path="/main/join1" element={<Join1 />} />
                        <Route path="/main/join2" element={<Join2 />} />
                        <Route path="/main/join3" element={<Join3 />} />
                        <Route path="/main/join3_1" element={<Join3_1 />} />
                        <Route path="/main/join4" element={<Join4 />} />
                        <Route path="/main/member1" element={<Member1 />} />
                        <Route path="/main/member2" element={<Member2 />} />
                        <Route path="/main/member3" element={<Member3 />} />
                        <Route path="/main/member4" element={<Member4 />} />
                        <Route path="/main/member5" element={<Member5 />} />
                        <Route path="/main/member6" element={<Member6 />} />
                        <Route path="/main/member7" element={<Member7 />} />
                        <Route path="/main/member8" element={<Member8 />} />
                        <Route path="/main/main1" element={<Main1 />} />
                        <Route path="/main/main2" element={<Main2 />} />
                        <Route path="/main/main3" element={<Main3 />} />
                        <Route path="/main/main4" element={<Main4 />} />
                        <Route path="/main/main5" element={<Main5 />} />
                        <Route path="/dashboard/dashboard_inspien1" element={<Dashboard1 />} />
                        <Route path="/dashboard/dashboard_inspien2" element={<Dashboard2 />} />
                        <Route path="/dashboard/dashboard_inspien3" element={<Dashboard3 />} />
                        <Route path="/dashboard/dashboard_partner1" element={<Dashboard4 />} />
                        <Route path="/dashboard/dashboard_partner2" element={<Dashboard5 />} />
                        <Route path="/dashboard/dashboard_customer1" element={<Dashboard6 />} />
                        <Route path="/dashboard/dashboard_customer2" element={<Dashboard7 />} />
                        <Route path="/dashboard/dashboard_customer3" element={<Dashboard8 />} />
                        <Route path="/user/user1" element={<User1 />} />
                        <Route path="/user/user2" element={<User2 />} />
                        <Route path="/user/user3" element={<User3 />} />
                        <Route path="/user/user4" element={<User4 />} />
                        <Route path="/user/user5" element={<User5 />} />
                        <Route path="/user/user6" element={<User6 />} />
                        <Route path="/user/user7" element={<User7 />} />
                        <Route path="/user/user8" element={<User8 />} />
                        <Route path="/cart/cart1" element={<Cart1 setTheme={setTheme} />} />
                        <Route path="/cart/cart2" element={<Cart2 setTheme={setTheme} />} />
                        <Route path="/cart/cart3" element={<Cart3 setTheme={setTheme} />} />
                        <Route path="/cart/cart4" element={<Cart4 setTheme={setTheme} />} />
                        <Route path="/cart/cart5" element={<Cart5 setTheme={setTheme} />} />
                        <Route path="/cart/cart6" element={<Cart6 setTheme={setTheme} />} />
                        <Route path="/cart/cart7" element={<Cart7 setTheme={setTheme} />} />
                        <Route path="/mypage/myinfo1" element={<Myinfo1 setTheme={setTheme} />} />
                        <Route path="/mypage/myinfo2" element={<Myinfo2 setTheme={setTheme} />} />
                        <Route path="/mypage/myinfo3" element={<Myinfo3 setTheme={setTheme} />} />
                        <Route path="/mypage/mileage" element={<Mileage setTheme={setTheme} />} />
                        <Route path="/mypage/use_product1" element={<UseProduct1 setTheme={setTheme} />} />
                        <Route path="/mypage/use_product2" element={<UseProduct2 setTheme={setTheme} />} />
                        <Route path="/mypage/use_product3" element={<UseProduct3 setTheme={setTheme} />} />
                        <Route path="/mypage/use_product4" element={<UseProduct4 setTheme={setTheme} />} />
                        <Route path="/mypage/order_list1" element={<OrderList1 setTheme={setTheme} />} />
                        <Route path="/mypage/order_list2" element={<OrderList2 setTheme={setTheme} />} />
                        <Route path="/mypage/order_detail" element={<OrderDetail setTheme={setTheme} />} />
                        <Route path="/store/store1" element={<Store1 />} />
                        <Route path="/store/store2" element={<Store2 />} />
                        <Route path="/store/store3" element={<Store3 />} />
                        <Route path="/store/store4" element={<Store4 />} />
                        {/*상품상세 - 인스피언_관리자,운영*/}
                        <Route path="/store/detail" element={<Detail setTheme={setTheme} />} />
                        <Route path="/store/detail1" element={<Detail1 />} />
                        <Route path="/store/detail2" element={<Detail2 />} />
                        <Route path="/store/detail3" element={<Detail3 />} />
                        {/*상품상세 - 인스피언_영업, 파트너 전체*/}
                        <Route path="/store/detail4" element={<Detail4 setTheme={setTheme} />} />
                        <Route path="/store/detail5" element={<Detail5 setTheme={setTheme} />} />
                        <Route path="/store/detail6" element={<Detail6 setTheme={setTheme} />} />
                        {/*상품상세 - 고객_관리자*/}
                        <Route path="/store/detail7" element={<Detail7 setTheme={setTheme} />} />
                        <Route path="/store/detail8" element={<Detail8 setTheme={setTheme} />} />
                        <Route path="/store/detail9" element={<Detail9 setTheme={setTheme} />} />
                        <Route path="/store/detail10" element={<Detail10 setTheme={setTheme} />} />
                        <Route path="/store/detail11" element={<Detail11 setTheme={setTheme} />} />
                        <Route path="/store/detail12" element={<Detail12 setTheme={setTheme} />} />
                        <Route path="/store/detail13" element={<Detail13 setTheme={setTheme} />} />
                        {/*상품상세 - 고객_일반*/}
                        <Route path="/store/detail14" element={<Detail14 setTheme={setTheme} />} />
                        {/*정산*/}
                        <Route path="/receipt/invoice" element={<Invoice />} />
                        <Route path="/receipt/invoice1" element={<Invoice1 />} />
                        <Route path="/receipt/invoice2" element={<Invoice2 />} />
                        <Route path="/receipt/invoice_customer" element={<InvoiceCustomer setTheme={setTheme} />} />
                        <Route path="/receipt/sales" element={<Sales />} />
                        <Route path="/receipt/sales_history" element={<SalesHistory setTheme={setTheme} />} />
                        <Route path="/404" element={<NotFound />} />
                        <Route path="/403" element={<Error403 />} />
                        <Route path="/500" element={<Error500 />} />
                        <Route path="/qna/list" element={<QnaList />} />
                        <Route path="/qna/detail" element={<QnaDetail />} />
                        <Route path="/qna/detail2" element={<QnaDetail setTheme={setTheme} />} />
                        <Route path="/qna/write" element={<QnaWrite setTheme={setTheme} />} />
                        <Route path="/customer/list" element={<CustomerList />} />
                        <Route path="/customer/company_detail" element={<CompanyDetail />} />
                        <Route path="/customer/user_detail" element={<UserDetail />} />
                        <Route path="/service/usage" element={<Usage setTheme={setTheme} />} />
                        <Route path="/example" element={<ExamplePage setTheme={setTheme} />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

