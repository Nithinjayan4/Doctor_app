import {faqs} from '../../assets/data/faqs'
import FaqItem from '../faq/FaqItem.jsx'

const FaqList = () => {
  return (
    <ul className='mt-[38px]'>
        {faqs.map((item,index)=>(
            <FaqItem item={item} key={index}/>
        ))}
    </ul>
  )
}

export default FaqList
