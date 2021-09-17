import { Prayer } from "@prisma/client"
import React, {SyntheticEvent} from "react"

interface PrayerCardProps {
	prayer: Prayer
}
// This image will be used as the fallback for the error images
const FALLBACK_IMAGE = "https://cdn-icons-png.flaticon.com/128/2941/2941825.png"

export default function PrayerCard(props: PrayerCardProps) {

	// This function is triggered if an error occurs while loading an image
	const imageOnErrorHandler = (
		event: React.SyntheticEvent<HTMLImageElement, Event>
	) => {
		event.currentTarget.src = FALLBACK_IMAGE
		event.currentTarget.className = "error"
	}
	return (
		<div className="border-2 shadow-md  border-gray-200 mx-auto rounded-lg  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
			<div className="sm:flex sm:items-start">
				<div className="overflow-hidden object-cover rounded-full mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
					<img
						className="object-cover"
						src={props.prayer.avatar}
						alt="avatar"
						onError={imageOnErrorHandler}
					/>
				</div>
				<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
					<h6 className="text-lg leading-6 font-medium text-gray-900">
						{props.prayer.name}
					</h6>
					<div className="mt-2">
						<p className="text-sm text-gray-500">{props.prayer.description} </p>
					</div>
				</div>
			</div>
		</div>
	)
}

