import Head from 'next/head'
import Navbar from '../components/navbar'
import PrayerCard from "./../components/PrayerCard"
import {Fragment, useRef, useState} from "react"
import {Dialog, Transition} from "@headlessui/react"
import AddPrayerForm from "./../components/AddPrayerForm"

import { PrismaClient, Prayer, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export async function getServerSideProps(){
	const prayers: Prayer[] = await prisma.prayer.findMany()

	 if (!prayers) {
			return {
				notFound: true,
			}
		}

	return {
		props: {
			initialPrayers: prayers
		}
	}
}

async function savePrayer(prayer: Prisma.PrayerCreateInput) {
	const response = await fetch("/api/prayers", {
		method: "POST",
		body: JSON.stringify(prayer),
	})

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	if (response.ok) {
		window.location.reload();
	}

	return await response.json()
}

export default function Home({ initialPrayers }) {
const [prayers, setPrayers] = useState<Prayer[]>(initialPrayers)
const [open, setOpen] = useState(false)
const cancelButtonRef = useRef(null)

  return (
		<div className="flex flex-col items-center  w-screen h-full  overflow-x-hidden justify-center relative py-2">
			<Head>
		

				<title>Jesus ✝️️ | The Only Hope</title>
				<meta charSet="UTF-8"></meta>
				<meta
					name="description"
					content="Welcome to Prayer Room. Write down what you want us to pray for you... Jesus Is Coming Soon!"
				></meta>
				<meta name="keywords" content="Prayer Room"></meta>
				<meta name="author" content="Hovah Yii"></meta>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				></meta>
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center pb-20">
				<h1 className=" text-4xl xl:text-6xl font-bold">
					Welcome to{" "}
					<a className="text-blue-400" href="https://nextjs.org">
						Prayer Room
					</a>
				</h1>

				<p className="mt-3 xl:text-2xl  text-xl ">
					“Pray in the Spirit, on all occasions, with all kinds of prayers and
					requests...” - Ephesians 6:18
				</p>

				<div className="-mx-3  items-start w-full mt-6 md:grid grid-cols-3 gap-4 ">
					{prayers.map((c, i: number) => (
						<div className="px-3 pb-4 " key={i}>
							<PrayerCard prayer={c} />
						</div>
					))}
				</div>
			</main>

			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="fixed z-10 inset-0 overflow-y-auto"
					initialFocus={cancelButtonRef}
					onClose={setOpen}
				>
					<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className="hidden sm:inline-block sm:align-middle sm:h-screen"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<div className=" pt-6 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
								<button
									type="button"
									className=" mt-3 absolute right-5 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									onClick={() => setOpen(false)}
									ref={cancelButtonRef}
								>
									X
								</button>
								<AddPrayerForm
									onSubmit={async (data, e) => {
										try {
											await savePrayer(data)
											setPrayers([...prayers, data])
											e.target.reset()
										} catch (err) {
											console.log(err)
										}
									}}
								/>{" "}
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			<button
				onClick={() => setOpen(true)}
				className="rounded-full w-16 h-16 bg-gray-50 border border-gray-200 fixed bottom-24 right-5 z-10 bg-red-500"
			>
				<svg
					version="1.1"
					id="Layer_1"
					x="0px"
					y="0px"
					fill="white"
					viewBox="-150 -80 700 600"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" />
					<path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" />
				</svg>
			</button>

			<Navbar />
		</div>
	)
}
