import LinkComponent from "@/app-components/LinkComponent";

export default function NavBar() {
    return (
            <nav className={'flex gap-2'}>
                <LinkComponent text={'🏀'} address={''} />
                <LinkComponent text={'Teams'} address={'teams'}/>
                <LinkComponent text={'Players'} address={'players'}/>
                <LinkComponent text={'Login'} address={'login'}/>
                <LinkComponent text={'Account'} address={'account'}/>
            </nav>
    );
}

