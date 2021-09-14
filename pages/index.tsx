import Head from 'next/head'

export default function Home() {
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

				<div className="flex flex-wrap items-center justify-around lg:max-w-4xl mt-6 max-w-xs ">
					<a
						href="https://nextjs.org/docs"
						className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-500 focus:text-blue-500"
					>
						<h3 className="text-lg xl:text-2xl font-bold">
							Documentation &rarr;
						</h3>
						<p className="mt-4 xl:text-xl text-sm">
							Find in-depth information about Next.js features and API.
						</p>
					</a>
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
			<nav className="fixed bottom-0  border bg-white flex">
				<div className="bottom-appbar">
					<div className="tabs">
						<div className="tab  tab--left">
							📖
							<span>Devotion</span>
						</div>
						<div className="tab tab--fab">
							<div className="top">
								<div className="fab">🙏</div>
							</div>
						</div>
						<div className="tab tab--right">
							📝
							<span>Blog</span>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}
