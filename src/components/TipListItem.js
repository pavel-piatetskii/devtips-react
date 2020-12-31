import React from "react";
import Parser from 'html-react-parser';
import "./TipListItem.scss";
import { timeAgo } from "../helpers/tip-helpers"


/**
 * Day componet for the list of days. Gets day name, available spots and
 * function to switch between days from props
 */
export default function TipListItem(props) {
	console.log(props)

	const { 
		creator_id,
		created_at,
		id,
		likes,
		title,
		is_liked,
		is_bookmarked,
		data,
		tags,
		type,
		description
	} = props;

	const likeClass = `${(is_liked) ? 'fas' : 'far'} fa-thumbs-up`;
	const bookClass = `${(is_bookmarked) ? 'fas' : 'far'} fa-bookmark`;
	const [likeID, bookID] = [`like-${id}`, `book-${id}`];
	const avatar = `https://avatars.dicebear.com/4.4/api/avataaars/${creator_id}.svg`;
	const creatorPage = `/user/${creator_id}`;
	const tipLink = `/tip/${id}`;

	let tagsField = '&nbsp;';
  if (tags) tagsField = tags.split(' ')
		.map(tag => `<a href="/search?search%5B%5D=${tag}">#${tag}</a>`).join('&nbsp;&nbsp;&nbsp;&nbsp;');
		
  let content = ``;
  switch (type) {
  case 'video':
    content += `<div class="video"><youtube-video controls src="${data}"></youtube-video><p>${description}</p></div>`;
    break;
  case 'markdown':
    content += `<div class="markdown"><pre>${data}</pre><p>${description}</p></div>`;
    break;
  case 'code':
    content += `<div class="code-block"><pre class="code">${data}</pre><p>${description}</p></div>`;
    break;
  case 'link':
    content += `<div class="link"><span>Link: </span><a href="${data}">${data}</a><p>${description}</p></div>`;
    break;
  case 'image':
    content += `<div class="image"><img src="${data}" class="mw-100" alt="${title}"></div>`;
  }

	return (
		<div className="tip-list-item">
			<div className="tip-controls">
						<img className={likeClass} id={likeID}></img>
						<a>{Parser("&#128077")}</a>;
						<span className="like badge badge-dark mb-2">{likes.length}</span>
						<img className={bookClass} id={bookID}></img>
				</div>
					<div className="tip-content">
						<div className="tip-title-and-time">
							<a href={tipLink}>{title}</a>
							<a>{timeAgo(created_at)}</a>
						</div>
						<div className="card-body" >
							{Parser(content)}
						</div>
						<mark className="tags-field">{Parser(tagsField)}</mark>
			</div>
					<a href={creatorPage}><img className="tip-avatar" src={avatar}></img></a>
		</div>
	);

};