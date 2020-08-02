import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Avatar, { avatarSize} from './avatar'

const defaultProps = {
    onAvatarClick : jest.fn(),
    size: 'large' as avatarSize ,
    src : 'https://xkx9431.github.io/xkx_blog/img/xkx_eye_photo.jpg ',
    alt : 'sample avatar'
}

describe( 'test Avatar compoment',()=>{

  it('should render the correct the default avatar',()=>{
    const wrapper = render(<Avatar {...defaultProps}/>)
    const element  =  wrapper.container.querySelector('button') as HTMLButtonElement;
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('msg-avatar-generic')
    fireEvent.click(element)
    expect(defaultProps.onAvatarClick).toHaveBeenCalled()
  })

//   it('should render the correct component based on different props', () => {
//     const wrapper = render(<Button {...testProps}>Nice</Button>)
//     const element = wrapper.getByText('Nice')
//     expect(element).toBeInTheDocument()
//     expect(element).toHaveClass( 'klass')
//   })

//   it('should render a link when btnType equals link and href is provided', () => {
//     const wrapper = render(<Button btnType={ButtonType.Link} href="http://dummyurl">Link</Button>)
//     const element = wrapper.getByText('Link')
//     expect(element).toBeInTheDocument()
//     expect(element.tagName).toEqual('A')
//     expect(element).toHaveClass('btn btn-link')
//   })
//   it('should render disabled button when disabled set to true', () => {
//     const wrapper = render(<Button {...disableProps}>Nice</Button>)
//     const element = wrapper.getByText('Nice') as HTMLButtonElement
//     expect(element).toBeInTheDocument()
//     expect(element.disabled).toBeTruthy()
//     fireEvent.click(element)
//     expect(disableProps.onClick).not.toHaveBeenCalled()
//   })
} )