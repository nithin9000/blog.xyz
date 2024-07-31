import {Link} from 'react-router-dom';

interface BlogCardProps{
	authorName: string;
	title:string;
	content:string;
	publishedDate:string;
	id:number;
}


export const BlogCard = ({
	id,
	authorName,
	publishedDate,
	title,
	content,

}:BlogCardProps) => {
	return <Link to={`/blog/${id}`}>
			<div className = "pt-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
				<div className = "flex">
				<Avatar name={authorName} />
				<div classsName = "font-extralight pl-2 text-sm flex justify-center flex-col">{authorName}</div>
				<div className = "flex justify-center flex-col pl-2"> <Circle /> </div>
				{/*<div className = "text-xs fle">	&#9679;	</div>*/}
				<div className = "pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">{ publishedDate}</div>
				</div>
				<div className = "text-xl font-semibold pt-2">
					{title}
				</div>
				<div className = "text-md font-thin">
					{content.slice(0,100)+ "..."}
				</div>
				<div className = "text-slate-400 text-sm pt-2">
				{`${Math.ceil(content.length/100)} minute(s) read`}
				</div>
				{/*<div className ="bg-slate-200 h-0.5 w-full"></div>*/}
			</div>
	</Link>
}

export function Avatar({name,size=6}: {name:string,size?:number}){
	return <div className={`p-2 relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
    <span class="font-xs text-gray-600 dark:text-gray-300">{name[0]}</span>
	</div>
}

function Circle(){
	return <div className = "h-1 w-1 rounded-full bg-slate-500" >
			</div>

}