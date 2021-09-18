import Navbar from "../components/navbar"
import Head from "next/head"
import TweetForm from "../components/TweetForm"
import TimelineTweet from "../components/TimelineTweet"
import styles from "./index.module.scss"

import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export async function getServerSideProps() {
	const tweets = await prisma.tweet.findMany({orderBy: {createdAt: "desc"}})

	return {
		props: {
			tweets: tweets.map((data) => ({
				...data,
				createdAt: data.createdAt.getTime(),
			})),
		},
	}
}

const saveTweet = async (data) => {
	await fetch("/api/tweet", {
		method: "POST",
		body: JSON.stringify(data),
	})
}

export default function devotion({ tweets }) {

	  const onSubmit = async (data) => {
			try {
				await saveTweet(data)
				window.location.reload()
			} catch (err) {
				console.log(err)
			}
		}

	return (
		<>
			<Head>
				<title>你们中间谁是没有罪的，他就可以先拿起石头打她</title>
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
			<div className="flex h-screen">
				<div className="m-auto">
					<main className="mb-10">
						<div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-96	">
							<div className="absolute left-0 bottom-0 w-full h-full z-10 bg-linear-gradient	"></div>
							<img
								src="https://ewscripps.brightspotcdn.com/dims4/default/94dada2/2147483647/strip/true/crop/1280x672+0+24/resize/1200x630!/quality/90/?url=https%3A%2F%2Fx-default-stgec.uplynk.com%2Fausw%2Fslices%2F44c%2F53c3dfd52290407986694c1471cfa82a%2F44cc53af2c3e42948028347bc9d24ae4%2Fposter_8d527cf8ff6944259f9092f069ae7a17.jpg"
								className="absolute left-0 top-0 w-full h-full z-0 object-cover "
							/>
							<div className="p-4 absolute bottom-0 left-0 z-20">
								<a
									href="#"
									className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
								>
									反思
								</a>
								<h2 className="text-4xl font-semibold text-gray-100 leading-tight">
									“你们中间谁是没有罪的，他就可以先拿起石头打她。”
								</h2>
								<div className="flex mt-3">
									<img
										src="https://avatars.githubusercontent.com/u/31881261?s=60&v=4"
										className="h-10 w-10 rounded-full mr-2 object-cover"
									/>
									<div>
										<p className="font-semibold text-gray-200 text-sm">Hovah</p>
										<p className="font-semibold text-gray-400 text-xs">
											9月18日
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
							<p className="mt-2 text-gray-600 pb-6">约翰福音 8 ： 1 - 11</p>

							<p className="pb-6">
								同性恋课题在近几年火了起来，主要是同性恋合法化成了趋势。根据{" "}
								<a
									className="underline"
									href="https://www.usatoday.com/story/money/2019/06/13/countries-where-same-sex-marriage-is-officially-legal/39514623/"
									target="_blank"
								>
									USA TODAY
								</a>{" "}
								，如今已有多达 29个欧美国家承认同性婚姻。即 《{" "}
								<a
									className="underline"
									href="https://www.christiantimes.cn/news/35213/%E8%8B%B1%E5%9B%BD%E5%8D%AB%E7%90%86%E5%85%AC%E4%BC%9A%E6%89%B9%E5%87%86%E5%90%8C%E6%80%A7%E5%A9%9A%E5%A7%BB%EF%BC%8C%E7%A6%8F%E9%9F%B3%E6%B4%BE%E4%BA%BA%E5%A3%AB%E5%87%86%E5%A4%87%E9%80%80%E5%87%BA"
									target="_blank"
								>
									基督邮报
								</a>{" "}
								》报道，英国卫理公会 (Methodist Church)
								通过决议，批准为同性结合提供祝福并承认同居伴侣。这起事件也间接导致教会因同性课题造成分裂。根据《{" "}
								<a
									className="underline"
									href="https://www.facebook.com/weiLiBao/photos/%E5%9B%A0%E5%90%8C%E6%80%A7%E8%AF%BE%E9%A2%98%E9%80%A0%E6%88%90%E5%88%86%E8%A3%82%E7%BE%8E%E5%9B%BD%E6%AC%B2%E6%88%90%E7%AB%8B%E6%96%B0%E5%AE%97%E6%B4%BE%E5%85%A8%E7%90%83%E5%8D%AB%E7%90%86%E5%85%AC%E4%BC%9A-%E8%99%BD%E7%84%B62020%E5%B9%B41%E6%9C%883%E6%97%A5%E7%BE%8E%E5%9B%BD%E8%81%94%E5%90%88%E5%8D%AB%E7%90%86%E5%85%AC%E4%BC%9A%E6%8F%90%E8%AE%AE%E5%9B%A0%E5%90%8C%E6%80%A7%E8%AF%BE%E9%A2%98%E9%80%A0%E6%88%90%E5%88%86%E8%A3%82%E8%AE%A1%E5%88%92%E4%B8%8D%E8%BF%87%E7%94%B1%E4%BA%8E%E6%96%B0%E5%86%A0%E7%96%AB%E6%83%85%E7%9A%84%E7%88%86%E5%8F%91%E6%80%BB%E8%AE%AE%E4%BC%9A%E8%A2%AB%E6%8B%96%E5%BB%B6%E8%87%B32022%E5%B9%B49/4311270035566980/"
									target="_blank"
								>
									卫理报
								</a>{" "}
								》脸书贴文，
							</p>

							<div className="border-l-4 border-gray-500 pl-4 mb-6  font-semibold	 rounded">
								美国欲成立新宗派:“全球卫理公会”
								虽然2020年1月3日美国联合卫理公会提议因同性课题造成分裂计划，不过由于新冠疫情的爆发，总议会被拖延至2022年9月6日才能举行。
								这个同性课题包括同性婚姻及同志任圣职问题的看法分歧导因。
								与此同时，持守圣经原则的传统派，已经拟就一个网站与标志，于上周即2021年３月１日，并以“全球卫理公会＂(Global
								Methodist Church) 命名的新宗派网站。
							</div>

							<p className="pb-6">
								基督教也因此课题而分裂成了两派，自由主义和保守派。自由主义派认为神爱世人，因此同性恋者应该被接纳，甚至他们的婚姻应该得到祝福；而保守派则认为，同性之间所有性行为都是圣经禁止的，因圣经将同性之间性行为列为违背天性的行为，乃属违反自然之事。
							</p>

							<h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
								放下偏见，回归圣经
							</h2>

							<p className="pb-6">
								我们必须承认性是神赐福的礼物。我们是照着神的形象样式所照。神一开始创造的是男人，后来再造女人。因为女人是因为男人独居不好，为他所造。所以神一开始是造男造女。从索多玛，尔摩拉的故事我们也可以看出，神厌恶同性淫乱。因此，事实是婚姻是建立在男人和女人的基础上。
							</p>

							<p className="pb-6">
								自由派过度强调自由，企图推翻圣经的权威。我们都知道放纵的自由不是真自由。真自由，只有在基督里。自由派选择为同性婚姻辩解，实际则是在扭曲圣经。难道圣经，即为神的话，其权威不高于一切吗？虽然圣经明确反对同性婚姻，自由派错误曲解圣经婚姻的真谛。然而，保守派，不可形同法律赛人，以有色眼镜看待同性恋者。
							</p>

							<p className="pb-6">
								同性恋者该被视为被罪捆绑的奴仆。我们不该论断他们。同性恋者虽然错，但轮不到我们去审判。如耶稣基督所说的那样，“你们中间谁是没有罪的，他就可以先拿起石头打她。”。保守派常犯的错误就是认为自己的罪比同性恋者的罪优越，而导致他们轻看甚至鄙视同性恋者。殊不知，同性恋者或许正在从同性恋的网罗里试着挣脱可是无法自拔。保守派应该给予同性恋者时间，即默默为他们祷告。因为释放的工作，乃在于基督。唯有基督和圣灵能叫人得着真自由。
							</p>

							<p className="pb-6">
								最后，笔者重申，我们不该标签任何人，他的罪，他的过犯。大家岂不知道自己眼中有刺？我们必须明白每个人都是罪人，除了耶稣，没有人可以在罪面前夸口，或说我的罪比你的罪好多了。因为我们都是罪人，都需要神的恩典和怜悯。唯基督能叫我们真的得自由，也能叫同性恋者得医治。或许，同性恋者需要的不是我们的提醒和论断，很多时候，他们内心其实知晓自己所犯的罪，并且懊悔，可是却无法走出来。唯有圣灵的工作，才能真正叫他们得自由。我们只要为他们祷告，陪伴即可。
							</p>

							<h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
								代祷事项：
							</h2>

							<p className="pb-6">
								<ol className="list-decimal pl-6">
									<li>
										为身边同性恋友人代祷，祈求神医治他们内心的创伤，在基督里得自由
									</li>
									<li>为自己时常论断人祷告，盼望我们都不要成为法律赛人。</li>
								</ol>
							</p>

							<h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
								参考链接：
							</h2>

							<p className="pb-6">
								<ol className="list-decimal pl-6">
									<li>
										<a
											href="http://cclw.net/soul/txlfdw/htm/chapter4.html"
											target="_blank"
										>
											爱中的责备--谈同性恋带给教会的危机
										</a>
									</li>
									<li>
										<a
											href="http://www.methodist.org.my/2015/09/%E4%BC%9A%E7%9D%A3%E7%89%A7%E5%87%BD%EF%BC%88%E4%B8%AD%EF%BC%89-%E4%BC%9A%E7%9D%A3%E8%87%B4%E5%87%BD%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E5%8D%AB%E7%90%86%E5%85%AC%E4%BC%9A/"
											target="_blank"
										>
											马来西亚卫理公会对同性婚姻的立场
										</a>
									</li>
								</ol>
							</p>
						</div>
					</main>

					<div className="mb-28">
						<div className=" max-w-screen m-auto border-2">
							<div className=" text-2xl font-bold justify-between	items-center  border-b-2 flex flex-row	">
								<div className="leading-7	 m-4 ">✍🏻 分享 + 得着 + 亮光🌟</div>
							</div>
							<TweetForm onSubmit={onSubmit} />
							{tweets.map((data) => (
								<TimelineTweet key={data.id} {...data} />
							))}
						</div>
					</div>
				</div>
			</div>

			<Navbar />
		</>
	)
}
