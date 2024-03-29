import styled from "styled-components";

export const CoffeContainer = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #F3F2F2;
  border-radius: 6px 36px;

  img {
    width: 120px;
    margin-top: -20px;
  }

  

  h2 {
    font-size: 20px;
    color: #403937;
    font-family: 'Baloo 2';
    margin-top: 1rem;
  }

  p {
    max-width: 200px;
    font-family: 'Roboto';
    font-size: 12px;
    line-height: 130%;
    color: #8D8686;
    text-align: center;
    margin-top: 0.8rem;
  }

  div {
    margin-top: 1.25rem; 
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;


    .priceCoffe {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      span {
        color: #574F4D;
        margin-top: -15px;
      }

      .price {
        width: 2%;
      }
    }

    .addQuantity {
      background: #E6E5E5;
      padding: 10px;
      border-radius: 6px;
      margin-top: -2px;

      span {
        margin-top: 3px;
        font-weight: 600;
      }
    }

    .marketCar {
      background: #4B2995;
      padding: 8px;
      border-radius: 6px;
      margin-top: 0px;

      :hover {
        background-color: #210B61;
      }
    }

  }
`  
export const TypesBox = styled.div`
    margin-top: 0.75rem;
    background: #F1E9C9;
    padding: 4px 8px;
    border-radius: 100px;

    h5 {
    font-family: 'Roboto';
    text-transform: uppercase;
    color: #C47F17;
    font-weight: 700;
    margin-top: 2px;
  }
`

export const IncrementButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #8047F8;

  :hover {
    background-color: #D8D8D8;
  }
`

export const DecrementButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #8047F8;

  :hover {
    background-color: #D8D8D8;
  }
`

export const  BtnCarCoffe = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`