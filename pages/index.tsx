import Head from 'next/head'
import Navbar from '../components/navbar'
import PrayerCard from "./../components/PrayerCard"
import { useState } from 'react';

import { PrismaClient, Prayer, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export async function getServerSideProps(){
	const prayers: Prayer[] = await prisma.prayer.findMany()
	return {
		props: {
			initialPrayers: prayers
		}
	}
}


export default function Home({ initialPrayers }) {
	  const [prayers, setPrayers] = useState<Prayer[]>(initialPrayers)

  return (
		<div className="flex flex-col items-center  w-screen  overflow-x-hidden	 justify-center relative py-2">
			<Head>
				<script
					data-name="BMC-Widget"
					data-cfasync="false"
					src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
					data-id="hovahyii"
					data-description="Support me on Buy me a coffee!"
					data-message=""
					data-color="#FFDD00"
					data-position="Right"
					data-x_margin="18"
					data-y_margin="100"
				></script>

				<title>Jesus ✝️️ | The Only Hope</title>
				<meta charSet="UTF-8"></meta>
				<meta
					name="description"
					content="Welcome to Prayer Room. “Pray in the Spirit, on all occasions, with all kinds of prayers and
					requests...” - Ephesians 6:18"
				></meta>
				<meta name="keywords" content="Prayer Room"></meta>
				<meta name="author" content="Hovah Yii"></meta>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				></meta>
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center">
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

					<div className="-mx-3 md:flex items-start w-full mt-6 ">
						{prayers.map((c, i: number) => (
							<div className="px-3 md:w-1/3" key={i}>
								<PrayerCard prayer={c} />
							</div>
						))}
					</div>
			</main>

			{/* <footer className="flex items-center justify-center w-full  h-24 ">
				<a
					className="flex items-center justify-center"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Sponsored by{" "}
					<img src="/logo.png" alt="Jesus Only Hope Logo" className="h-6 ml-2" />
				</a>
			</footer> */}
			<Navbar />
		</div>
	)
}
