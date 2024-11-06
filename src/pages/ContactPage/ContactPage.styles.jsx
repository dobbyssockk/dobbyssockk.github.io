import styled from 'styled-components';

export const StyledPage = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    align-items: center;
    padding: 180px 50px 0 50px;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 300px 400px;
        padding: 120px 0 0 0;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
        grid-template-columns: 400px 520px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
        grid-template-columns: 400px 585px;
    }

    .photo {
        display: none;

        @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
            display: unset;
        }
    }

    .descr {
        padding-top: 6px;
        .divider {
            margin: 0;
            margin-top: 4px;
            margin-bottom: 20px;
        }
    }

    .text {
        font-weight: 700;
        font-size: 14px;
        margin-bottom: 20px;
    }

    .form {
        margin-top: 30px;
        display: grid;
        justify-content: space-between;
        row-gap: 30px;
        grid-template: repeat(2, 45px) 145px minmax(45px, auto) / 1fr;

        @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
            grid-template: 45px 190px 45px / repeat(2, auto);
            column-gap: 10px;
        }

        @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
            grid-template-rows: 45px 190px 45px;
            grid-template-columns: repeat(2, 280px);
        }

    }

    .input {
        position: relative;
        input {
            width: 100%;
            height: 100%;
            padding: 0 20px;
            font-size: 12px;
            font-weight: 500;
        }
        label {
            display: block;
            position: absolute;
            top: -9px;
            left: 20px;
            height: 18px;
            padding: 0 8px;
            background-color: #ffffff;
            font-size: 12px;
        }
    }

    .textarea {
        position: relative;
        grid-column: unset;
        width: 100%;

        @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
            grid-column: 1 / 3;
        }

        textarea {
            width: 100%;
            height: 100%;
            resize: none;
            padding: 20px;
            font-size: 12px;
        }
        label {
            display: block;
            position: absolute;
            top: -9px;
            left: 20px;
            height: 18px;
            padding: 0 8px;
            background-color: #ffffff;
            font-size: 12px;
        }
    }

    .triggers {
        display: grid;
        grid-template-columns: 1fr;
        grid-column: unset;
        width: 100%;
        row-gap: 20px;

        @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
            grid-column: 1 / 3;
            grid-template-columns: repeat(2, auto);
            column-gap: 35px;
        }
    }

    .btn {
        height: 45px;
        max-width: 250px;
        margin: 0 auto;
        transition: all .5s;
        background: #C0C0C0;
        border: none;
        cursor: pointer;

        &:active {
            opacity: .7;
        }

        &:hover {
            background: #C0C0C0;
            box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
        }
        
        @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
            max-width: unset;
            margin: unset;
            padding: 8px 25px;
            line-height: 16px;
        }

        @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
            padding: 12px 25px;
        }
    }

    .policy {
        font-size: 12px;
        font-weight: 500;
        display: flex;
        align-items: center;
        grid-row: 1 / 2;
        max-width: 270px;
        margin: 0 auto;
        line-height: 18px;

        input {
            margin-right: 10px;
        }

        @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
            grid-row: unset;
            max-width: unset;
            margin: unset;
        }
    }
`;