import { TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET } from '$env/static/private'
import db from '$lib/database'
import Twitch from '@auth/core/providers/twitch'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { SvelteKitAuth } from '@auth/sveltekit'

export const handle = SvelteKitAuth({
  adapter: PrismaAdapter(db),
  providers: [Twitch({ clientId: TWITCH_CLIENT_ID, clientSecret: TWITCH_CLIENT_SECRET })]
})
