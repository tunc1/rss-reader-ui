export default function RSSFeed({feed})
{
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">{feed.title}</h5>
				<p className="card-text">{feed.timeDifference}</p>
				<a target="_blank" href={feed.link}>{feed.source}</a>
			</div>
		</div>
	);
}