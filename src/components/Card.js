import React from 'react'
const Card = (props) => {
  let badgeText
  if(props.openSpots === 0){
      badgeText = "SOLD OUT"
  } else if (props.location === "Online"){
      badgeText ="ONLINE"
  }

  return (
    <div className='w-44 text-xs m-9'>
        <div className='relative'>
            <img className='w-full rounded-lg' src={`../images/${props.coverImg}`} alt="cardimg" />
            {badgeText && <span className='absolute top-[8px] left-[8px] px-3 py-1.5 bg-white rounded'>{badgeText}</span>}
        </div>
        <div className='flex items-center gap-x-1.5'>
            <img className='h-3.5 ' src='/images/Star1.png' alt="star" />
            <span>{props.stats.rating}</span>
            <span className='text-[#918E9B]'>({props.stats.reviewCount}) • </span>
            <span className='text-[#918E9B]'>{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className='font-bold'>From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card