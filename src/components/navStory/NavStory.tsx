import { Image } from 'antd';

const NavStory = ({...props}) => {
    return (
        <Image.PreviewGroup
    preview={{
      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >
    <div className='flex flex-col items-center justify-center gap-0'>
        <div className='w-[40px] h-[40px] flex flex-col items-center justify-between p-1 rounded-full border-2 bg-white border-lime-500 overflow-hidden'>
            <Image className='w-full h-full' src={props.img} />
        </div>
        <small>{props.title}</small>
    </div>
  </Image.PreviewGroup>
    )

}

export default NavStory
