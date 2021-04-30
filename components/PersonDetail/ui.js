import styled from '@emotion/styled'

export const Detail = styled.main`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  grid-gap: 20px;
  width: 95%;
  height: 100%;
  max-width: 1200px;
  padding: 20px 0;

  margin: 0 auto;
`
export const ImageContainer = styled.div`
  max-width: 300px;
  width: 100%;
  position: relative;
`
export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 28px;
    color: white;
  }
  p {
    color: white;
  }
  .bio {
    margin-top: 10px;
    color: white;
    line-height: 1.5;
  }
`
