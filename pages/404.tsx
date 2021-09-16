// pages/404.js
import Head from "next/head"
import Navbar from "../components/navbar"

export default function Custom404() {
	return (
		<>
			<div className="flex h-screen">
				<div className="m-auto">
					<a href="https://www.buymeacoffee.com/hovahyii">
						{" "}
						<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c46f7eb-a870-430c-8351-a3f6f12d62f0/dcc83j2-f1093682-5169-4cdf-bf9d-1f0a12b63e40.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjNDZmN2ViLWE4NzAtNDMwYy04MzUxLWEzZjZmMTJkNjJmMFwvZGNjODNqMi1mMTA5MzY4Mi01MTY5LTRjZGYtYmY5ZC0xZjBhMTJiNjNlNDAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SrFHM4OP_Ty-98L_RHHrFFQjHUuM20dA5Za0xCTVZzk"></img>
					</a>

					<h2 className="pt-10 text-center text-4xl">Coming Soon</h2>

					<h2 className="pt-4 text-center text-xl">
						For the Glory of God <br /> and the service of man
					</h2>
					<h2 className="pt-4 text-center text-xs">Developed by Hovah</h2>
				</div>
			</div>
			<Navbar/>
		</>
	)
}
