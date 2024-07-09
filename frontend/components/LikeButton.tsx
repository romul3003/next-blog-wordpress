'use client'

import { useState } from 'react'
import { updateTestLikeMutation } from '../lib/api'

type LikeButtonProps = {
  likeCount: number
  postId: number
  clientMutationId?: string
}

const LikeButton = ({ likeCount, postId, clientMutationId }: LikeButtonProps) => {
  const [count, setCount] = useState(likeCount)

  const updateLike = async () => {
    try {
      await updateTestLikeMutation({ likeCount: count + 1, clientMutationId, postId })
    } catch (error) {
      console.error('Failed to update like count', error)
    }
  }

  return (
    <button 
      type='button' 
      className='border py-1 px-3'
      onClick={() => updateLike()}
    >
      Likes {count}
    </button>
  )
}

export default LikeButton