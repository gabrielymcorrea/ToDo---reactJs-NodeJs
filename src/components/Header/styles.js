import styled from "styled-components";

export const container = styled.div`
    width: 100%;
    height: 70px;
    background: #20295F;
    border-bottom: 5px solid #EE6B26;

    display:flex;
`

export const leftSide = styled.div`
    width: 50%;
    height: 70px;
    padding-left:10px;

    display:flex;
    align-items: center;


    img{
        width: 100px;
        height: 40px;
    }
`

export const rightSide = styled.div`
    width: 50%;
    height: 70px;

    display:flex;
    align-items: center;
    justify-content: center;
    
    a{
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color: #EE6B26;
        }
    }

    .dividir::after{
        content: "|";
        color: #FFF;
        margin: 0 10px;
    }

    #notification{
        img{
            height: 30px;
            width: 25px;
        }

        span{
            background: #fff;
            color: #EE6B26;
            padding: 3px 7px;
            border-radius:50%;
            position: relative;
            top: -20px;
            right: 5px;
        }

        &:hover{
            opacity: 0.5;
        }
    }
`