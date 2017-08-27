import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Thumbs = styled.span`
  cursor: pointer
`

const PostCard = ({ post, votePost, index }) => {
	return (
		<div className="card my-2">
			<div className="card-body">
				<h4 className="card-title">
					{post.title}
				</h4>
				<h6 className="card-subtitle mb-2 text-muted">
					{post.author}
				</h6>
				<p className="card-text">
					{post.body}
				</p>
			</div>

			<div className="card-footer">
				<small className="text-muted float-left">
					{moment(post.timestamp).format('L')}{' '}
					{moment(post.timestamp).format('LT')}
				</small>

				<small className="float-right">
					<Thumbs className="mx-3" onClick={() => votePost(post.id, 'upVote')}>
						<i className="fa fa-thumbs-o-up" aria-hidden="true" />
					</Thumbs>
					<span>
						<b>
							{post.voteScore}
						</b>
					</span>
					<Thumbs className="mx-3" onClick={() => votePost(post.id, 'downVote')}>
						<i className="fa fa-thumbs-o-down" aria-hidden="true" />
					</Thumbs>
				</small>
			</div>
		</div>
	)
}

export default PostCard
