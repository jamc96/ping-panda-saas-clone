import { Check } from 'lucide-react';
import { Heading } from '@/components/heading';
import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { ShinyButton } from '@/components/shiny-button';
import { MockDiscordUI } from '@/components/mock-discord-ui';
import { AnimatedList } from '@/components/magicui/animated-list';
import { DiscordMessage } from '@/components/discord-mesage';

export default function Page() {
  return (
    <>
      <section className='relative py-24 sm:py-32'>
        <MaxWidthWrapper className='text-center'>
          <div className='reliative mx-auto text-center flex flex-col items-center gap-10'>
            <div>
              <Heading>
                <span>Real-Time SaaS Insights,</span>
                <br />
                <span className='relative bg-gradient-to-r from-primary to-primary-darker text-transparent bg-clip-text'>
                  Delivered to Your Discord
                </span>
              </Heading>
            </div>
            <p className='text-base/7 text-gray-600 max-w-prose text-center text-pretty'>
              PingPanda is the easiest way to monitor your SaaS. Get instant
              notifications for{' '}
              <span className='font-semibold text-gray-700'>
                sales, new users, or any other event
              </span>{' '}
              sent directly to your Discord.
            </p>

            <ul className='space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start'>
              {[
                'Real-time Discord alerts for critical events',
                'Buy once, use forever',
                'Track sales, new users, or any other event',
              ].map((item, index) => (
                <li key={index} className='flex gap-1.5 items-center text-left'>
                  <Check className='size-5 shrink-0 text-primary' />
                  {item}
                </li>
              ))}
            </ul>
            <div className='w-full max-w-80'>
              <ShinyButton
                href='/sign-up'
                className='relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl'
              >
                Start For Free Today
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className='relative pb-4'>
        <div className='absolute inset-x-0 bottom-24 top-24 bg-primary' />
        <div className='relative mx-auto'>
          <MaxWidthWrapper className='relative'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <MockDiscordUI>
                <AnimatedList>
                  <DiscordMessage
                    avatarSrc='/brand-asset-profile-picture.png'
                    avatarAlt='PingPanda Avatar'
                    username='PingPanda'
                    timestamp='Today at 12:35PM'
                    badgeText='SignUp'
                    badgeColor='#43b581'
                    title='👤 New user signed up'
                    content={{
                      name: 'Mateo Ortiz',
                      email: 'm.ortiz19@gmail.com',
                    }}
                  />
                  <DiscordMessage
                    avatarSrc='/brand-asset-profile-picture.png'
                    avatarAlt='PingPanda Avatar'
                    username='PingPanda'
                    timestamp='Today at 12:35PM'
                    badgeText='Revenue'
                    badgeColor='#faa61a'
                    title='💰 Payment received'
                    content={{
                      amount: '$49.00',
                      email: 'zoe.martinez2001@email.com',
                      plan: 'PRO',
                    }}
                  />
                  <DiscordMessage
                    avatarSrc='/brand-asset-profile-picture.png'
                    avatarAlt='PingPanda Avatar'
                    username='PingPanda'
                    timestamp='Today at 5:11AM'
                    badgeText='Milestone'
                    badgeColor='#5865f2'
                    title='🚀 Revenue Milestone Achieved'
                    content={{
                      recurringRevenue: '$5.000 USD',
                      growth: '+8.2%',
                    }}
                  />
                </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
    </>
  );
}
