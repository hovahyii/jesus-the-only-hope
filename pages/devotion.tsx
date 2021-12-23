import Navbar from "../components/navbar"
import Head from "next/head"
import React, {useEffect, useRef, useState} from "react"

// import TweetForm from "../components/TweetForm"
// import TimelineTweet from "../components/TimelineTweet"
// import styles from "./index.module.scss"

// import {PrismaClient} from "@prisma/client"

// const prisma = new PrismaClient()

export const getServerSideProps = async () => {
	let today = new Date().toLocaleDateString()
	console.log(today)
	const res = await fetch(
		"https://api.experience.odb.org/devotionals/v2?site_id=1&status=publish&country=MY&on=" + today
	)
	const data = await res.json()



	return {
		props: {devotions: data},
	}
}

// export async function getServerSideProps() {
// 	const tweets = await prisma.tweet.findMany({orderBy: {createdAt: "desc"}})

// 	return {
// 		props: {
// 			tweets: tweets.map((data) => ({
// 				...data,
// 				createdAt: data.createdAt.getTime(),
// 			})),
// 		},
// 	}
// }

// const saveTweet = async (data) => {
// 	await fetch("/api/tweet", {
// 		method: "POST",
// 		body: JSON.stringify(data),
// 	})
// }

const Devotions = ({ devotions }) => {

	//   const onSubmit = async (data) => {
	// 		try {
	// 			await saveTweet(data)
	// 			window.location.reload()
	// 		} catch (err) {
	// 			console.log(err)
	// 		}
	// 	}

   

	return (
		<>
			{devotions.map((devotion) => (
				<Head>
					<title>{devotion.title}</title>
					<meta charSet="UTF-8"></meta>
					<meta name="description" content={devotion.excerpt}></meta>
					<meta name="keywords" content={devotion.excerpt}></meta>
					<meta name="author" content={devotion.author_name}></meta>
					<link rel="icon" href="/favicon.ico" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					></meta>
				</Head>
			))}

			{devotions.map((devotion) => (
				<div className="flex  h-full">
					<div className="m-auto">
						<main className="mb-12">
							<div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-screen	">
								<div className="absolute left-0 bottom-0 w-full h-full z-10 bg-linear-gradient	"></div>
								<img
									src={devotion.shareable_image}
									className="absolute left-0 top-0 w-full h-full z-0 object-fill "
								/>
								<div className="p-4 absolute bottom-0 left-0 z-10">
									<h2 className="text-4xl font-semibold text-gray-100 leading-tight">
										{devotion.title}
									</h2>
									<div className="flex mt-3">
										<img
											src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoNl9gN57S_Q6UJL3Oq2gtZQAVyEUszasQfgz7is-LJeU__ubZ3PALGvDeIUpaNFS-C0&usqp=CAU"
											className="h-10 w-10 rounded-full mr-2 object-cover"
										/>

										<p className="font-semibold text-gray-200 text-sm">
											<a href={devotion.author_link} target="_blank">
												{devotion.author_name}
											</a>
										</p>
										<p className="font-semibold text-gray-400 text-xs absolute bottom-0 pl-12">
											{new Date().toDateString()}
										</p>
									</div>
								</div>
							</div>

							<div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto  text-lg leading-relaxed">
								<p className="text-lg font-semibold text-gray-600 leading-tight md:text-2xl	pb-8">
									Bible in a Year:{" "}
									<a
										href={devotion.bible_in_a_year_url}
										target="_blank"
										className="underline md:text-2xl	"
									>
										{devotion.bible_in_a_year_references}
									</a>
								</p>

								<div
									className="text-lg text-center pl-4 mb-6 italic font-semibold	subpixel-antialiased
 rounded  md:text-2xl"
									dangerouslySetInnerHTML={{__html: devotion.verse}}
								/>

								<p className="text-lg  font-semibold text-gray-600 md:text-2xl	 ">
									Today's Scripture: &nbsp;
									<a
										href={devotion.passage_url}
										target="_blank"
										className="text-lg rounded-full border pt-2 pb-2 pl-4 pr-4 bg-blue-700 text-white  md:text-2xl"
									>
										{devotion.passage_reference}
									</a>
								</p>

								<div className="border-4 border-double border-indigo-600  font-semibold p-4 m-6 ">
									<h2 className="text-2xl text-center text-indigo-800 font-semibold pb-2">
										Insight
									</h2>

									<div
										className=" font-semibold	 rounded"
										dangerouslySetInnerHTML={{__html: devotion.insights}}
									/>
								</div>
								<div
									className="text-black  "
									dangerouslySetInnerHTML={{__html: devotion.content}}
								/>

								<div className="  p-2 text-bold">
									<h2 className="text-2xl text-center text-gray-800 font-semibold mb-4 mt-4">
										Reflect
									</h2>

									<p className="text-semibold">
										<div
											className="text-black text-center "
											dangerouslySetInnerHTML={{__html: devotion.response}}
										/>
									</p>
								</div>
								<div className=" text-bold">
									<h2 className="text-2xl text-center text-gray-800 font-semibold mb-4 ">
										Pray
									</h2>

									<p className="text-semibold  pb-12">
										<div
											className="text-black text-center  italic"
											dangerouslySetInnerHTML={{__html: devotion.thought}}
										/>
									</p>
								</div>
							</div>
						</main>

						{/* <div className="mb-28">
						<div className=" max-w-screen m-auto border-2">
							<div className=" text-2xl font-bold justify-between	items-center  border-b-2 flex flex-row	">
								<div className="leading-7	 m-4 ">✍🏻 分享 + 得着 + 亮光🌟</div>
							</div>
							<TweetForm onSubmit={onSubmit} />
							{tweets.map((data) => (
								<TimelineTweet key={data.id} {...data} />
							))}
						</div>
					</div> */}
					</div>
				</div>
			))}
			<Navbar />
		</>
	)
}

export default Devotions;
