'use client'

import { ReactNode } from 'react'
import { updateTestLikeMutation } from '../lib/api'

type LikeButtonProps = {
  children: ReactNode
  likeCount: number
  postId: number
  clientMutationId?: string
}

const LikeButton = ({ children, likeCount, postId, clientMutationId }: LikeButtonProps) => {
  const updateLike = async () => {
    try {
      await updateTestLikeMutation({ likeCount: likeCount + 1, clientMutationId, postId })
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
      {children}
    </button>
  )
}

export default LikeButton