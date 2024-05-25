import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Button } from '@/components/ui/button'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
			</Head>
			<div className=''>
				<p className='text-3xl font-bold text-indigo-500'>discord</p>
				<Button variant='destructive'>click me</Button>
			</div>
		</>
	)
}
