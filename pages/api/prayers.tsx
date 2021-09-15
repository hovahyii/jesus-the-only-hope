import type {NextApiRequest, NextApiResponse} from "next"

import {PrismaClient, Prisma} from "@prisma/client"

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "POST") {
		return res.status(405).json({message: "Method not allowed"})
	}

	try {
		const prayer: Prisma.PrayerCreateInput = JSON.parse(req.body)
		const savedPrayer = await prisma.prayer.create({data: prayer})
		res.status(200).json(savedPrayer)
	} catch (err) {
		res.status(400).json({message: "Something went wrong"})
	}
}
