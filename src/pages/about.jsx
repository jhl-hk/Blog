import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  DiscordIcon,
  GitHubIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
  AfdianIcon,
  LinkedInIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - JHL</title>
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I'm JianyueHugo. I live in Japan, where make my life better.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I've always loved computers and programming that can make my life and the lives of others easier and more convenient. Of course it will be a pleasure to share my project with others.
              </p>
              <p>
                I would also like to translate some good projects into Chinese, so that more and more people can understand and get involved with technologies and do more.
              </p>
              <p>
              I'm also a game player, such as Minecraft, Conter-strike: Global Offensive, Rust, Escape From Tarkov. I really like to work or participate in their community.
              </p>
              <p>
                Overall, I think after I work hard and study, I can go to a nice university and make more people's lives better.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://jhl.hk/linkedin" icon={LinkedInIcon}>
                Contact on LinkedIn
              </SocialLink>
              <SocialLink href="https://jhl.hk/x" icon={TwitterIcon} className="mt-4">
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://jhl.hk/tg" icon={TelegramIcon} className="mt-4">
                Contact on Telegram
              </SocialLink>
              <SocialLink href="https://jhl.hk/ins" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://jhl.hk/github" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://discord.gg/YRf2RAWwcp" icon={DiscordIcon} className="mt-4">
                Join Discord Server
              </SocialLink>
              <SocialLink href="https://jhl.hk/afdian" icon={AfdianIcon} className="mt-4">
                Donate on Afdian
              </SocialLink>
              <SocialLink
                href="mailto:contact@jianyuehugo.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                contact@jianyuehugo.com
              </SocialLink>
              <SocialLink
                href="mailto:valor@jianyuelab.org"
                icon={MailIcon}
                className="mt-4"
              >
                valor@jianyuelab.org (Only for technologies related)
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
