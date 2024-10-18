import styled from 'styled-components';

export const StyledPage = styled.section`
    padding-bottom: 90px;
    display: grid;
    grid-template-columns: 400px 585px;
    justify-content: space-between;
    align-items: center;

    .photo {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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
        grid-template-rows: 45px 190px 45px;
        grid-template-columns: repeat(2, 280px);
        justify-content: space-between;
        row-gap: 30px;
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
        grid-column: 1 / 3;
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
        grid-column: 1 / 3;
        display: grid;
        grid-template-columns: repeat(2, auto);
        column-gap: 35px;
    }

    .btn {
        height: 45px;
        padding: 12px 25px;
        transition: all .5s;
        cursor: pointer;
        &:hover {
            background: #C0C0C0;
            box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
        }
    }

    .static {
        background: #C0C0C0;
        border: none;
        &:active {
            opacity: .7;
        }
    }

    .policy {
        font-size: 12px;
        font-weight: 500;
        display: flex;
        align-items: center;
        input {
            margin-right: 10px;
        }
    }
`;