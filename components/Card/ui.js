import styled from '@emotion/styled'

export const CardUI = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 200px;
  max-width: 300px;
  min-height: 300px;
  width: 100%;
  img {
    z-index: 1;
  }
`

export const CardBody = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  color: white;
`
export const DetailBtn = styled.button`
  cursor: pointer;
  i {
    font-family: 'solid icon';
  }
`
export const LikeBtn = styled.button`
  i {
    font-family: 'solid icon';
  }
`
