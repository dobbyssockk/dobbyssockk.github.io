import styled from "styled-components";

export const StyledAbout = styled.div`
    .wrapper {
        display: grid;
        grid-template-columns: 400px 570px;
        grid-template-rows: minmax(400px, auto);
        grid-auto-rows: minmax(245px, auto);
        column-gap: 70px;
        row-gap: 40px;
        align-items: center;

        .photo {
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        
        .descr {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

            .text {
                color: #666;
                line-height: 1.6;
            }

            ul {
                list-style-type: disc;
                margin-bottom: 1rem;
                padding-left: 2rem;
            }
        }
    }
`;