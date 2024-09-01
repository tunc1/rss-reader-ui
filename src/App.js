import {useEffect,useState} from "react";
import RSSFeed from "./RSSFeed";
import './style.css';

export default function App()
{
	const [feeds,setFeeds]=useState([]);
	useEffect(()=>
	{
		const url="/api/rss"+location.search;
		fetch(url)
		.then(res=>res.json())
		.then(setFeeds);
	},[]);
	return (
		<div className="p-3 m-0 border-0 bd-example m-0 border-0">
		{feeds.map((feed, index)=>(
			<RSSFeed feed={feed} key={index} />
		))}
		</div>
	);
}