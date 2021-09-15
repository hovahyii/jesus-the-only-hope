
import { useForm } from 'react-hook-form';
import InputSpacer from "./InputSpacer"
import {useState} from "react"

const FormError = ({ errorMessage }) => {
  return <p className="text-red-300 mt-1">{errorMessage}</p>;
};

interface AddPrayerFormProps {
	onSubmit: any
}
 
  
export default function AddPrayerForm(props: AddPrayerFormProps) {
	const {register, handleSubmit,  formState: { errors }} = useForm()
  

	return (
		<form className="max-w-xl m-4 " onSubmit={handleSubmit(props.onSubmit)}>
			<h6 className="text-gray-800 font-medium">Prayer Request</h6>

			<div className="mt-2">
				<label className="block text-sm text-gray-00">Name</label>
				<InputSpacer>
					<input
						className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
						placeholder="Your Name"
						name="name"
						{...register("name", {
							required: "Required",
						})}
					/>
					{errors.name && <FormError errorMessage="Name is required" />}
				</InputSpacer>
			</div>
			<div className="mt-6">
				<label className="block text-sm text-gray-600">Profile Picture</label>
				<InputSpacer>
					<input
						className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
						placeholder="Your Avatar"
						name="avatar"
						{...register("avatar", {
							required: "Required",
						})}
					/>
					{errors.avatar && (
						<FormError errorMessage="Avatar link is required" />
					)}{" "}
				</InputSpacer>
			</div>
			<div className="mt-4">
				<label className=" block text-sm text-gray-600">Description</label>
				<InputSpacer>
					{" "}
					<textarea
						className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
						placeholder="Things to pray for ... "
						name="description"
						{...register("description", {
							required: "Required",
						})}
					/>
					{errors.description && (
						<FormError errorMessage="Description is required" />
					)}{" "}
				</InputSpacer>
			</div>

			<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
				<button
					className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
					type="submit"
				
				>
					Submit
				</button>
			</div>
		</form>
	)
}