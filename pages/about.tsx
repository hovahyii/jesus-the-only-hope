import Navbar from "../components/navbar"
import Head from "next/head"

export default function blog() {
	return (
		<>
			<Head>
				<title>Blog</title>
				<meta charSet="UTF-8"></meta>
				<meta
					name="description"
					content="同性恋课题在近几年火了起来，主要是同性恋合法化成了趋势。根据 USA today ，如今已有多达 29个欧美国家承认同性婚姻。即 《 基督邮报 》报道，英国卫理公会 (Methodist Church) 通过决议，批准为同性结合提供祝福并承认同居伴侣。这起事件也间接导致教会因同性课题造成分裂。根据《 卫理报 》脸书贴文，"
				></meta>
				<meta name="keywords" content="反思"></meta>
				<meta name="author" content="Hovah Yii"></meta>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				></meta>
			</Head>
			<div className="flex h-screen  bg-gray-100  lg:h-full overflow-x-hidden  ">
				<div className="m-auto ">
                                        <div className="mx-5 min-h-screen grid place-content-center">
                    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
                    <h1 className="text-3xl mb-3">Hi there</h1>
                    <p className="text-lg">You can contact me whenever you need prayer or just curious about something.</p>
                    </div>
                    <div className="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
                    <h2 className="font-semibold text-2xl mb-6">Start chatting</h2>
                    <img className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg" src="/hovah.png" alt="User avatar" />
                    <p className="capitalize text-xl mt-1">Hovah Yii</p>
                    <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12"><div className="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>Active</span>
                    <button  className="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-3 pb-4 px-8 inline"><a href="https://wa.link/h9iyae">Send a message</a></button>
                    </div>
                    </div>
				</div>
			</div>
			<Navbar />
		</>
	)
}
