import { Icon } from '@iconify/react';

import { Button } from '~/components';
import { Layout } from '~/layouts';

export default function Home() {
	return (
		<Layout.Basic>
			<main className="min-h-screen flex flex-1 flex-col items-center justify-center py-16">
				<h1 className="m-0 leading-5 text-3xl sm:text-5xl lg:text-7xl font-bold text-center">
					Welcome to{' '}
					<p className="text-primary-500 no-underline rounded-lg default-transition default-focus">
			      Resume generator
					</p>
				</h1>

				<p className="my-8 leading-5 text-2xl text-center text-gray-500">
					Creating a beautiful and clear resume is easy!
				</p>

        <div className='flex flex-col lg:flex-row items-center justify-center lg:space-x-4 space-y-4 lg:space-y-0 w-full mt-8 lg:mt-4'>
          <Button.Outline href="/generator">
            <Icon className="mr-3" icon="feather:file-text" />
					  <span>Go to the generator</span>
				  </Button.Outline>

          <Button.Outline href="https://github.com/yuneguy/resume-generator" external>
            <Icon className="mr-3" icon="feather:github" />
					  <span>Go to project on Github</span>
				  </Button.Outline>
        </div>
        
			</main>
		</Layout.Basic>
	);
}
