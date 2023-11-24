export default function RedirectButton({text, href} : {text: string, href: string}) {
    return (
        <a href={href} className='bg-blue-500 text-white font-bold py-2 px-4 rounded m-2 hover:bg-blue-400'>{text}</a>
    );
}
