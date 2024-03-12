import Link from "next/link";

export default function LinkComponent({address, text}) {
    return (
        <Link href={`/${address}`}>{text}</Link>
    );
}

