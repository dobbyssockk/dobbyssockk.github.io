import styled from "styled-components";

export const StyledColumn = styled.div`
    display: grid;

    h3 {
        position: relative;
        padding-left: 35px;
        color: #000000;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;

        &:before {
            content: '';
            position: absolute;
            width: 15px;
            height: 15px;
            background-color: #C0C0C0;
            border-radius: 100%;
            left: -7px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
`;

export const StyledItem = styled.li`
    position: relative;

    &:after {
        content: '';
        width: 1px;
        height: calc(100% + 16px);
        background-color: #000000;
        position: absolute;
        top: -8px;
        left: 0;
    }

    .wrapper {
        position: relative;

        &:before {
            content: '';
            height: 1px;
            width: 35px;
            position: absolute;
            top: 68px;
            background-color: #000000;
        }

        .info {
            position: relative;
            padding: 45px 0 0 91px;

            .image {
                position: absolute;
                top: 50px;
                left: 35px;
                
                &:before {
                    content: '';
                    position: absolute;
                    top: -25%;
                    left: 0;
                    width: 36px;
                    height: 36px;
                    border-radius: 100%;
                    background-color: #C0C0C0;
                    z-index: -1;
                }

                z-index: 1;

                img {
                    max-width: unset;
                    position: absolute;
                    left: 17px;
                    top: 14px;
                }
            }

            h4 {
                color: #000000;
                font-weight: 700;
                font-size: 14px;
                line-height: 21px;
            }

            .subtitle {
                font-size: 12px;
                font-weight: 500;
            }
        }
    }

    p {
        padding-left: 35px;
        margin-top: 15px;
        font-size: 13px;
        font-weight: 500;
    }
`;