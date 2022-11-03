import styled from '@emotion/styled'
import MainPage from './mainpage';

let SomeComp = styled.div({
  color: 'hotpink'
})

let AnotherComp = styled.div`
  color: ${props => props.color};
`

export default function Index() {
  return(
    <>
      <div className='page'>
      <MainPage />
    </div>
    </>
  )
}