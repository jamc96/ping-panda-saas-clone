'use server';

import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export async function getDatabaseSyncStatus() {
    const auth = await currentUser();

    if (!auth) redirect('/sign-in')

    const user = await prisma.user.findFirst({ where: { externalId: auth.id } })

    if (!user) {
        await prisma.user.create({
            data: {
                email: auth.emailAddresses[0].emailAddress,
                quotaLimit: 100,
                externalId: auth.id
            }
        })
    }
    redirect('/dashboard')

}