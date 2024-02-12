import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getMonth, getYear } from "date-fns";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import CalendarImg from "images/ico/ico_calendar.svg";

const Calendar = ({ selectedDate, setSelectedDate }) => {
    const [startDate, setStartDate] = useState(null);
    const YEARS = Array.from({ length: getYear(new Date()) + 1 - 2000 }, (_, i) => getYear(new Date()) - i);
    const MONTHS = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
    ];

    return (
        <DatePickerWrapper>
            <DatePicker
                // 요일이 Su Mo Tu가 아닌 S M T 형태로 나타냄
                formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
                dateFormat="yyyy-MM-dd"
                locale={ko}
                placeholderText="날짜 선택"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                }) => (
                    <div
                        className="header"
                    >
                        <button
                            type='button'
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}
                        >
                            <BsChevronLeft />
                        </button>
                        <div className="date">
                            <span>{getYear(date)}년</span>
                            <span>{MONTHS[getMonth(date)]}월</span>
                        </div>
                        <button
                            type='button'
                            onClick={increaseMonth}
                            disabled={nextMonthButtonDisabled}
                        >
                            <BsChevronRight />
                        </button>
                    </div>
                )}
            />
        </DatePickerWrapper>
    );
};

const DatePickerWrapper = styled.div`
    position: relative;
    .react-datepicker__input-container input {
        width: 14.3rem;
        height: 3.6rem;
        padding: 0.8rem 1.8rem 0.8rem 4.2rem;
        background: url(${CalendarImg}) no-repeat left 1.8rem center;
        font-size: 1.4rem;
        &.react-datepicker-ignore-onclickoutside {
            border: 1px solid ${(props) => props.theme.gray3};
            box-shadow: 0 0 0.4rem rgba(0,0,0,0.15);
        }
    }
    .react-datepicker-popper{
        padding-top: 0;
        &.react-datepicker-popper * {
            color: inherit !important;
        }
        .react-datepicker{
            border: 1px solid ${(props) => props.theme.gray3};
            font-family: inherit;
            .react-datepicker__triangle{
                display: none;
            }
            .react-datepicker__header {
                padding: 2rem 2rem 0;
                background-color: #fff;
                border: none;
                .header {
                    display: flex;
                    justify-content: space-between;
                    padding: 0 0.7rem;
                    margin-bottom: 1.2rem;
                    font-size: 1.4rem;
                    font-weight: 500;
                    button {
                        display: inline-flex;
                        align-items: center;
                    }
                    .date span:last-child {
                        margin-left: 0.8rem;
                    }
                }
            }
            .react-datepicker__day-names {
                margin: 0;
            }
            .react-datepicker__day-name,
            .react-datepicker__day{
                width: 2.6rem;
                line-height: 2.6rem;
                margin: 0;
                font-size: 1.2rem;
                & + div {
                    margin-left: 0.4rem;
                }
            }
            .react-datepicker__month {
                padding: 0 2rem 2rem 2rem;
                margin: 0;
            }
            .react-datepicker__week {
                margin-top: 0.6rem;
                .react-datepicker__day {
                    border-radius: 50%;
                    &.react-datepicker__day--selected {
                        background-color: #4F63E3;
                        color: #fff !important;
                    }
                    &.react-datepicker__day--today {
                        background-color: #E9EBFC;
                    }
                }
            }
        }
    }
`

export default Calendar;