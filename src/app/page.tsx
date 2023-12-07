import RedirectButton from '@/components/RedirectButton';



export default function Home() {
    return (
        <main className='container mx-auto mt-10 flex flex-col'>
            <RedirectButton text='Editor' href='/editor'/>
            <RedirectButton text='Workspaces' href='/workspaces'/>
        </main>
    );
}
