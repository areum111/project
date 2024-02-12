import React, {useEffect, useMemo, useState} from 'react';
import SelectBox from "../SelectBox/SelectBox";
import DataTable from "../Table/DataTable";
import Pagination from "../Pagination/Pagination";
import Button from "../Button/Button";
import { ProductListWrap } from "styles/cart.styled"
import ConfirmDialog from "../Modal/ConfirmDialog";

// 즉시구매, 분할결제 (디자인상 화면이 같아 편의상 공통으로 사용함)
const UseProductList1 = ({ noData, isAdmin, setVisible }) => {
    const columnData = [
        {
            accessor: 'shop',
            Header: '판매처',
            width: "12%",
        },
        {
            accessor: 'company',
            Header: '판매사',
            width: "12%",
        },
        {
            accessor: 'product',
            Header: '상품 정보',
            width: "auto",
        },
        {
            accessor: 'price',
            Header: '금액',
            width: "15%",
        },
        {
            accessor: 'start_date',
            Header: '이용 개시일',
            width: "12%",
        },
        {
            accessor: 'state',
            Header: '상태',
            width: "10%",
        },
        {
            accessor: 'manage',
            Header: '관리',
            width: "10%",
        },
    ]

    const columns = useMemo(() => columnData, []);
    let dataArray = [];

    //데이터 있는 경우 없는 경우 스타일 확인을 위해 배열 구분
    if(noData){
        dataArray = [];
    }else {
        dataArray = [
            {
                'shop': '백오피스',
                'company': '인스피언',
                'product':
                    <div className="product">
                        <p className="name"><span className="label_package">P</span>EDI 워크스페이스</p>
                        <p className="gray_txt">(단위 : 100GB / 수량 1개)</p>
                    </div>,
                'price': '10원',
                'start_date': '2023-06-21',
                'state': <p className="state"><span>이용예정</span></p>,
                'manage': <div className="manage_btn"><Button type="button" className="small dark_gray" onClick={() => setVisible(true)}>해지</Button></div>
            },
            {
                'shop': '백오피스',
                'company': '인스피언',
                'product':
                    <div className="product">
                        <p className="name"><span className="label_workspace">W</span>EDI 유통사 주문 수집</p>
                        <p className="gray_txt">(단위 : 100GB / 수량 1개)</p>
                    </div>,
                'price': '10,000원',
                'start_date': '2023-06-21',
                'state': <p><span className="state ing">이용중</span></p>
            },
            {
                'shop': '백오피스',
                'company': '인스피언',
                'product':
                    <div className="product">
                        <p className="name"><span className="label_workspace">W</span>EDI 구축 인건이 내용이 길어질 경우 여기에서 그냥</p>
                        <p className="gray_txt">(단위 : 100GB / 수량 1개)</p>
                    </div>,
                'price': '10,000원',
                'start_date': '2023-06-21',
                'state': <p><span className="state">이용중지</span><span className="stop_date">(2023-06-29)</span></p>
            },
        ]
    }
    const datas = useMemo(() => dataArray, [])

    return (
        <ProductListWrap>
            <DataTable
                columns={columns}
                data={datas}
            />
            {datas.length === 0 ? <NoData isAdmin={isAdmin} /> : null}
        </ProductListWrap>
    )
}

// 구독형
const UseProductList2 = ({ noData, isAdmin, setVisible, setVisible3, setVisible5 }) => {
    const columnData = [
        {
            accessor: 'shop',
            Header: '판매처',
            width: "12%",
        },
        {
            accessor: 'company',
            Header: '판매사',
            width: "12%",
        },
        {
            accessor: 'product',
            Header: '상품 정보',
            width: "auto",
        },
        {
            accessor: 'price',
            Header: '금액',
            width: "15%",
        },
        {
            accessor: 'start_date',
            Header: '이용 개시일',
            width: "12%",
        },
        {
            accessor: 'state',
            Header: '상태',
            width: "10%",
        },
        {
            accessor: 'manage',
            Header: '관리',
            width: "10%",
        },
    ]

    const columns = useMemo(() => columnData, []);
    let dataArray =[];

    //데이터 있는 경우 없는 경우 스타일 확인을 위해 배열 구분
    if(noData){
        dataArray = [];
    }else {
        dataArray = [
            {
                'shop': '백오피스',
                'company': '인스피언',
                'product':
                    <div className="product">
                        <p className="name"><span className="label_package">P</span>EDI 워크스페이스</p>
                        <p className="gray_txt">(단위 : 100GB / 수량 1개)</p>
                    </div>,
                'price': '10원',
                'start_date': '2023-06-21 ~',
                'state': <p className="state"><span>이용예정</span></p>,
                'manage': <div className="manage_btn"><Button type="button" className="small dark_gray" onClick={() => setVisible(true)}>해지</Button></div>
            },
            {
                'shop': '백오피스',
                'company': '인스피언',
                'product':
                    <div className="product">
                        <p className="name"><span className="label_workspace">W</span>EDI 유통사 주문 수집</p>
                        <p className="gray_txt">(단위 : 100GB / 수량 1개)</p>
                    </div>,
                'price': '10,000원',
                'start_date': '2023-06-21 ~ \n 2025-05-21',
                'state': <p><span className="state ing">이용중</span></p>,
                'manage': <div className="manage_btn"><Button type="button" className="small dark_gray" onClick={() => setVisible3(true)}>중지</Button></div>
            },
            {
                'shop': '백오피스',
                'company': '인스피언',
                'product':
                    <div className="product">
                        <p className="name"><span className="label_workspace">W</span>EDI 구축 인건이 내용이 길어질 경우 여기에서 그냥</p>
                        <p className="gray_txt">(단위 : 100GB / 수량 1개)</p>
                    </div>,
                'price': '10,000원',
                'start_date': '2023-06-21 ~ \n 2023-06-29',
                'state': <p><span className="state">이용중지</span><span className="stop_date">(2023-06-29)</span></p>,
                'manage':
                    <div className="manage_btn">
                        <Button type="button" className="small restart_btn" onClick={() => setVisible5(true)}>재개</Button>
                        <Button type="button" className="small dark_gray" onClick={() => setVisible3(true)}>중지</Button>
                    </div>
            },
            {
                'shop': '백오피스',
                'company': '인스피언',
                'product':
                    <div className="product">
                        <p className="name"><span className="label_workspace">W</span>EDI 구축 인건이 내용이 길어질 경우 여기에서 그냥</p>
                        <p className="gray_txt">(단위 : 100GB / 수량 1개)</p>
                    </div>,
                'price': '100,000,000,000원',
                'start_date': '-',
                'state': <p><span className="state">이용해지</span><span className="stop_date">(2023-06-29)</span></p>
            },
        ]
    }
    const datas = useMemo(() => dataArray, [])

    return (
        <ProductListWrap>
            <DataTable
                columns={columns}
                data={datas}
            />
            {datas.length === 0 ? <NoData isAdmin={isAdmin} /> : null}
        </ProductListWrap>
    )
}

const NoData = ({ isAdmin }) => {
    return (
        isAdmin
            ? <div className="no_data"><p>구매 이력이 없습니다.</p></div>
            : <div className="no_data"><p>주문 내역이 없습니다.</p><Button type="button" className="small outline">상품 둘러보기</Button></div>
    )
}

const UseProductList = ({ noData, isAdmin }) => {
    //이용해지 팝업
    const [visible, setVisible] = useState(false);
    //이용해지 완료 확인
    const [visible2, setVisible2] = useState(false);
    //이용중지 팝업
    const [visible3, setVisible3] = useState(false);
    //이용중지 완료 팝업
    const [visible4, setVisible4] = useState(false);
    //이용재개 팝업
    const [visible5, setVisible5] = useState(false);
    //이용재개 확인 팝업
    const [visible6, setVisible6] = useState(false);

    const options4 = [
        {value: 1, label: "최근 등록순"},
        {value: 2, label: "이용 개시일순"}
    ]
    const options5 = [
        {value: 1, label: "10개씩 보기"},
        {value: 2, label: "30개씩 보기"},
        {value: 3, label: "50개씩 보기"},
        {value: 4, label: "100개씩 보기"}
    ]
    const tabLists = [
        {id: 0, title: "즉시구매"},
        {id: 1, title: "분할결제"},
        {id: 2, title: "구독형"}
    ]
    const [index, setIndex] = useState(0);

    return (
        <>
            <div className="cont_box">
                <div className="tab_menu_wrap">
                    <ul className="tab_menu">
                        {tabLists.map((list) => {
                            return (
                                <li
                                    key={list.id}
                                    className={index === list.id ? "on" : null}
                                    onClick={() => setIndex(list.id)}><span>{list.title }</span></li>
                            )
                        })}
                    </ul>
                </div>
                <div className="outline_box">
                    <div className="tb_top">
                        <span className="cnt">총 0개</span>
                        <div className="right">
                            <SelectBox className="select" options={options4} value={options4[0]} />
                            <SelectBox className="select" options={options5} value={options5[0]} />
                        </div>
                    </div>
                    {index === 0 ? <UseProductList1 setVisible={setVisible} noData={noData} isAdmin={isAdmin} /> : null}
                    {index === 1 ? <UseProductList1 setVisible={setVisible} noData={noData} isAdmin={isAdmin} /> : null}
                    {index === 2 ? <UseProductList2 setVisible={setVisible} setVisible3={setVisible3} setVisible5={setVisible5} noData={noData} isAdmin={isAdmin} /> : null}
                    <Pagination />
                </div>
            </div>
            <ConfirmDialog
                visible={visible}
                onCancel={() => setVisible(false)}
                onConfirm={()=> {setVisible(false);setVisible2(true)}}
                text={"이용해지 하시겠습니까?"}
                subText={"※ 반드시 이용 상태 안내에 있는 \n 이용해지란을 참고하시고 이용을 해지해주세요."}
            />
            <ConfirmDialog
                visible={visible2}
                onConfirm={() => setVisible2(false)}
                text={"이용해지 처리 되었습니다."}
            />
            <ConfirmDialog
                visible={visible3}
                onCancel={() => setVisible3(false)}
                onConfirm={()=> {setVisible3(false);setVisible4(true)}}
                text={"이용중지 하시겠습니까?"}
                subText={"※ 반드시 이용 상태 안내에 있는 \n 이용중지란을 참고하시고 이용을 중지해주세요."}
            />
            <ConfirmDialog
                visible={visible4}
                onConfirm={() => setVisible4(false)}
                text={"이용중지 처리 되었습니다."}
            />
            <ConfirmDialog
                visible={visible5}
                onCancel={() => setVisible5(false)}
                onConfirm={()=> {setVisible5(false);setVisible6(true)}}
                text={"이용재개 하시겠습니까?"}
                subText={"※ 반드시 이용 상태 안내에 있는 \n 이용중란을 참고하시고 이용을 재개해주세요."}
            />
            <ConfirmDialog
                visible={visible6}
                onConfirm={() => setVisible6(false)}
                text={"이용재개 처리 되었습니다."}
            />
        </>
    )
};

export default UseProductList;