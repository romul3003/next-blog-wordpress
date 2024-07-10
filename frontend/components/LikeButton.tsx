'use client'

import { useEffect, useState } from 'react'
import { updateTestLikeMutation } from '../lib/api'

type LikeButtonProps = {
  likeCount: number
  postId: number
  clientMutationId?: string
}

const LikeButton = ({ likeCount, postId, clientMutationId }: LikeButtonProps) => {
  const [count, setCount] = useState(likeCount)
  const [isLoading, setIsLoading] = useState(false)

  const updateLike = async () => {
    setIsLoading(true)

    try {
      const { testLike } = await updateTestLikeMutation({ likeCount: count + 1, postId, clientMutationId })
      setCount(testLike)
    } catch (error) {
      console.error('Failed to update like count', error)
    } finally {
      setIsLoading(false)  
    }
  }

  useEffect(() => {
    setCount(likeCount) 
  }, [likeCount])

  return (
    <button 
      type='button' 
      className='border py-1 px-3'
      onClick={() => updateLike()}
      disabled={isLoading}
    >
      Likes {count}
    </button>
  )
}

export default LikeButton