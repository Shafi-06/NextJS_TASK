import Link from 'next/link';
import { useRouter } from 'next/router';
import {useSearchParams} from 'next/navigation';

//http://localhost:3000/post/page3?number=123

export default function Page3() {
    const router = useRouter();
    const { number } = router.query;
    const param = useSearchParams();
  return (
    <>
       <h1>Number from URL(Find NUMBER by ROUTER): {number}</h1>
       <h1>Number from URL(Find NUMBER by PARAM): {param.get('number')}</h1>
       
       <h2>
          <Link href="/post/page2">Register</Link>
      </h2>
      
    </>
  );
}