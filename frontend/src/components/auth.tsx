import {Link} from "react-router-dom";
import {ChangeEvent,useState} from 'react';
import {SignupInput} from "@nithin0.9/medium-clone";

export const Auth = ({ type }: {type:"signup" | "singin"})=>{
	const [postInputs,setPostInputs] = useState<SignupInput>({
		name:"",
		email:"",
		password:""
	});

	return (
		<div className = "bg-slate-100 h-screen flex justify-center ">
			{/*{JSON.stringify(postInputs)}*/}
			<div className = "flex justify-center flex-col " >
				<div className="flex justify-center flex-col px-10 py-6">
					<div className="text-3xl font-extrabold">
						{type === "signup"?"Create an Account":"Log in to your account"}
					</div>
					<div className = "text-slate-600">
						{type === "signup"?"Already have an account?":"Don't have an account"}
						<Link className="pl-1 underline" to={"/signin"}>{type === "signup"?"Login":"Sign Up"} </Link>
					</div>
				</div>

				<div className="flex justify-start flex-col">
					<div className = "text-l font-semibold">Username</div>
					<LabelledInput title="Name" placeholder="Enter your name" onChange={(e)=>{
						setPostInputs ({
							...postInputs,
							name:e.target.value
						})
					}}/>
					<div className = "pt-2 text-l font-semibold">Email</div>
					<LabelledInput title="Email" placeholder="xyz@example.com" onChange={(e)=>{
						setPostInputs ({
							...postInputs,
							email:e.target.value
						})
					}}/>
					<div className = "pt-2 text-l font-semibold">Password</div>
					<LabelledInput title="Password" type={"password"}  onChange={(e)=>{
						setPostInputs ({
							...postInputs,
							pasword:e.target.value
						})
					}}/>
					<button type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none
													focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5
													me-2 mb-2 mt-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700
													dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>
				</div>

			</div>
		</div>
	)
}
interface LabelledInputType{
	label:string;
	placeholder:string;
	onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
	type?:string;

}

function LabelledInput({label,placeholder,onChange,type}:LabelledInputType){
	return <div>
	<label className="block mb-2 text-sm text-gray-900 dark:text-white font-semibold">{label}</label>
	<input onChange = {onChange} type={type || "text"} id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
	 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
</div>

}

